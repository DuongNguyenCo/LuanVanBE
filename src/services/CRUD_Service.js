import db from "../models/index";

let getByBusiness = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.service.findAll({
        raw: true,
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

module.exports = { getByBusiness };
