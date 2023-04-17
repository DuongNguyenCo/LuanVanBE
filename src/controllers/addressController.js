import crudAddress from "../services/CRUD_Address";

let create = async (req, res) => {
  let data = await crudAddress.create(req.body);
  res.status(200).json(data);
};

let getAll = async (req, res) => {
  let data = await crudAddress.getAll(req.params.id);
  res.status(200).json(data);
};

let update = async (req, res) => {
  let data = await crudAddress.update(req.body);
  res.status(200).json(data);
};

module.exports = { create, getAll, update };
