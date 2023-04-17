import crudBusiness from "../services/CRUD_Business";

let getAll = async (req, res) => {
  let data = await crudBusiness.getAll(req.query.page, req.query.limit);
  res.status(200).json(data);
};

let getByID = async (req, res) => {
  let data = await crudBusiness.getByID(req.params.id);
  res.status(200).json(data);
};

let getAllService = async (req, res) => {
  const data = await crudBusiness.getAllService(req.params.id);
  res.status(200).json(data);
};

let create = async (req, res) => {
  let data = await crudBusiness.create(req.body);
  res.status(200).json(data);
};

let update = async (req, res) => {
  let data = await crudBusiness.update(req.body);
  res.status(200).json(data);
};

let login = async (req, res) => {
  let data = await crudBusiness.login(req.body);
  res.status(200).json(data);
};

module.exports = {
  getAll,
  getByID,
  create,
  update,
  login,
  getAllService,
};
