import crudLanguage from "../services/CRUD_Languge";

let getAll = async (req, res) => {
  const data = await crudLanguage.getAll();
  res.status(200).json(data);
};

module.exports = { getAll };
