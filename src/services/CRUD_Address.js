import { Op } from "sequelize";
import db from "../models/index";

let getAll = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.address.findAll({
        where: { id_business: id },
        raw: true,
      });
      resolve({
        errCode: 0,
        errMessage: "findAll successfully",
        data,
      });
    } catch (err) {
      reject(err);
    }
  });
};

let create = (address) => {
  return new Promise(async (resolve, reject) => {
    try {
      const business = await db.business.findOne({
        where: { id: address.idBusiness },
      });
      if (business) {
        const data = await db.address.findOrCreate({
          raw: true,
          where: {
            [Op.and]: [
              { id_business: address.idBusiness },
              { city: address.city },
              { district: address.district },
              { ward: address.ward },
              { street: address.street },
            ],
          },
          defaults: {
            id_business: address.idBusiness,
            street: address.street,
            ward: address.ward,
            district: address.district,
            city: address.city,
          },
        });
        if (data[1]) {
          resolve({
            errCode: 0,
            errMessage: "create successfully",
          });
        } else {
          resolve({
            errCode: 1,
            errMessage: "address already exists",
          });
        }
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

let update = (address) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.address.update(
        {
          district: address.district,
          ward: address.ward,
          city: address.city,
          street: address.street,
        },
        {
          where: {
            [Op.and]: [
              { id: address.idAddress },
              { id_business: address.idBusiness },
            ],
          },
        }
      );
      if (data[0] > 0) {
        resolve({ errCode: 0, errMessage: "update successfully" });
      } else {
        resolve({ errCode: 1, errMessage: "update failed" });
      }
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { create, getAll, update };
