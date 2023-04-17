import crudTypejob from "../services/CRUD_Typejob";

let getAll = async (req, res) => {
  const data = await crudTypejob.getAll();
  res.status(200).json(data);
};

module.exports = { getAll };
