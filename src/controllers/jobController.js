import crudJob from "../services/CRUD_Job";

let create = async (req, res) => {
  const data = await crudJob.create(req.body);
  res.status(200).json(data);
};
let getAll = async (req, res) => {
  let data = await crudJob.getAll(req.query);
  res.status(200).json(data);
};
let getById = async (req, res) => {
  let data = await crudJob.getById(req.params.id);
  res.status(200).json(data);
};

let getByBusiness = async (req, res) => {
  let data = await crudJob.getByBusiness(req.params.id);
  res.status(200).json(data);
};

module.exports = { create, getAll, getById, getByBusiness };
