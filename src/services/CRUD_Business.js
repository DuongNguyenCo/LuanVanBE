require("dotenv").config();
import db from "../models/index";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { hashPassword } from "./CRUD_User";
import { v2 as cloudinary } from "cloudinary";
import { Op, Sequelize } from "sequelize";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

let uploadCloud = (image, fname) => {
  return new Promise(async (resolve, reject) => {
    try {
      await cloudinary.uploader.upload(
        image,
        {
          overwrite: true,
          invalidate: true,
          resource_type: "raw",
          public_id: `logo/business/${fname}`,
        },
        (err, result) => {
          if (err) console.log(err);
          if (result) {
            resolve(result);
          }
        }
      );
    } catch (e) {
      reject(e);
    }
  });
};

let login = (business) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.business.findOne({
        where: { email: business.email },
        raw: true,
      });
      if (data) {
        let checkPass = bcrypt.compareSync(business.password, data.password);
        if (checkPass) {
          const { password, ...other } = data;
          const token = jwt.sign({ business: other }, process.env.TOKEN_KEY, {
            expiresIn: "2h",
          });
          resolve({
            errCode: 0,
            errMessage: "Login Successfully",
            data: { other, token },
          });
        } else {
          resolve({
            errCode: 1,
            errMessage: "incorrect password",
          });
        }
      } else {
        resolve({
          errCode: -1,
          errMessage: "User not found",
        });
      }
    } catch (err) {
      reject(err);
    }
  });
};

let getAll = (page = 1, limit = 5) => {
  return new Promise(async (resolve, reject) => {
    try {
      page = page * 1;
      limit = limit * 1;
      const data = await db.business.findAll({
        attributes: ["id", "name", "url"],
        include: [
          {
            model: db.address,
            attributes: ["street", "ward", "district", "city"],
          },
          {
            model: db.post,
            attributes: ["id"],
          },
        ],
        nest: true,
        limit: limit,
        offset: (page - 1) * limit,
      });
      resolve({
        errCode: 0,
        errMessage: "Find all data",
        data,
      });
    } catch (err) {
      reject(err);
    }
  });
};
let getByID = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.business.findOne({
        attributes: ["name", "des", "benefit", "url", "id"],
        include: [
          {
            model: db.post,
            attributes: ["id", "createdAt", "expire"],
            include: [
              {
                model: db.job,
                attributes: ["id", "name", "salary"],
                include: [
                  { model: db.language, attributes: ["name"] },
                  { model: db.address, attributes: ["city"] },
                ],
              },
            ],
          },
        ],
        where: { id: id },
        order: [[db.post, "expire", "DESC"]],

        nest: true,
      });
      if (data) {
        resolve({
          errCode: 0,
          errMessage: "findOne Successfully",
          data,
        });
      } else {
        resolve({
          errCode: -1,
          errMessage: "Business not found",
        });
      }
    } catch (err) {
      reject(err);
    }
  });
};
let getAllService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let code = await db.business_service.findAll({
        where: { id_business: id },
        raw: true,
      });
      const a = await Promise.all(
        code.map(async (a) => {
          const b = await db.service.findOne({
            attributes: ["id", "name", "type_service"],
            where: { id: a.id_service },
            raw: true,
          });
          return { ...b, exprire: a.expire };
        })
      );

      resolve({
        errCode: 0,
        errMessage: "Find all data",
        data: a,
      });
    } catch (err) {
      reject(err);
    }
  });
};

let create = (business) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.business.findOrCreate({
        where: { email: business?.email },
        defaults: {
          name: business?.name,
          password: business?.pass && (await hashPassword(business.pass)),
        },
      });
      if (data[1]) {
        await db.address.create({
          id_business: data[0].dataValues.id,
          city: business.city,
        });
        let service = await db.service.findOne({
          where: { name: "Gói cơ bản" },
          raw: true,
        });
        await db.business_service.create({
          id_service: service.id,
          id_business: data[0].dataValues.id,
          expire: 0,
        });
        const { password, ...other } = data[0].dataValues;
        const token = jwt.sign({ business: other }, process.env.TOKEN_KEY, {
          expiresIn: "2h",
        });
        resolve({
          errCode: 0,
          errMessage: "Create successfully",
          data: { other, token },
        });
      } else {
        resolve({
          errCode: 1,
          errMessage: "Email already exists",
        });
      }
    } catch (err) {
      reject(err);
    }
  });
};

let update = (business) => {
  return new Promise(async (resolve, reject) => {
    try {
      let resUpload = await uploadCloud(business.url, business.name);
      let dataNew = await db.business.update(
        {
          name: business.name,
          phone: business.phone,
          des: business.des,
          benefit: business.benefit,
          url: resUpload.url,
        },
        { where: { email: business?.email }, raw: true }
      );
      if (dataNew[0] > 0) {
        let data = await db.business.findOne({
          where: { email: business?.email },
        });
        resolve({ errCode: 0, errMessage: "update successfully", data });
      } else {
        resolve({ errCode: 1, errMessage: "update failed" });
      }
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  getAll,
  getByID,
  create,
  update,
  login,
  getAllService,
};
