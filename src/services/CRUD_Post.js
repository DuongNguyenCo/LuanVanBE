import { raw } from "body-parser";
import db from "../models/index";

let getAll = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.post.findAll({
        include: [
          {
            model: db.job,
            include: [{ model: db.typejob }],
          },
        ],
        raw: true,
        nest: true,
      });
      resolve({ errCode: 1, errMessage: "findAll successfully", data });
    } catch (err) {
      reject(err);
    }
  });
};

let create = (post) => {
  return new Promise(async (resolve, reject) => {
    try {
      const time = new Date();
      const date = new Date(time.getTime() + 30 * 24 * 60 * 60 * 1000);
      let data = await db.post.findOrCreate({
        where: {
          id_job: post.idJob,
          id_business: post.idBusiness,
        },
        defaults: {
          expire: date,
          step1: post.step1,
          step2: post.step2,
          step3: post.step3,
          step4: post.step4,
          step5: post.step5,
        },
        raw: true,
      });
      if (data[1]) {
        resolve({
          errCode: 0,
          errMessage: "create post successfully",
          data: data[0].dataValues,
        });
      } else {
        resolve({
          errCode: 1,
          errMessage: "create post failed",
        });
      }
    } catch (err) {
      reject(err);
    }
  });
};

let postService = (post) => {
  return new Promise(async (resolve, reject) => {
    try {
      const list = post.listService;
      let data = await db.post_service.findAll({
        where: { id_post: post.idPost },
        raw: true,
      });
      if (data.length > 0) {
        resolve({
          errCode: 1,
          errMessage: "post already exists",
          data: data,
        });
      } else {
        list.map(async (service) => {
          await db.post_service.create({
            id_post: post.idPost,
            id_service: service,
          });
        });
        resolve({
          errCode: 0,
          errMessage: "create post successfully",
          data: data,
        });
      }
    } catch (err) {
      reject(err);
    }
  });
};


module.exports = {
  getAll,
  create,
  postService,
};
