import crudService from "../services/CRUD_Service";

let getByBusiness = async (req, res) => {
  const data = await crudService.getByBusiness(req.params);
  res.status(200).json(data);
};

module.exports = { getByBusiness };
