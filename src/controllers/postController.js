import crudPost from "../services/CRUD_Post";

let getAll = async (req, res) => {
  let data = await crudPost.getAll();
  res.status(200).json(data);
};

let create = async (req, res) => {
  let data = await crudPost.create(req.body);
  res.status(200).json(data);
};

let postService = async (req, res) => {
  let data = await crudPost.postService(req.body);
  res.status(200).json(data);
};

module.exports = {
  getAll,
  create,
  postService,
};
