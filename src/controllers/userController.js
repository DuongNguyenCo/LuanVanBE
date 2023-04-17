import crudUser from "../services/CRUD_User";

let getByID = async (req, res) => {
  let data = await crudUser.getByID(req.params.id);
  if (data.errCode === 0) {
    res.status(200).json(data);
  }
};

let create = async (req, res) => {
  let data = await crudUser.create(req.body);
  res.cookie("refreshToken", data.data.token, {
    httpOnly: true,
    secure: false,
    path: "/",
    sameSite: "strict",
  });
  res.status(200).json(data);
};

let update = async (req, res) => {
  let data = await crudUser.update(req.body);
  res.status(200).json(data);
};

let login = async (req, res) => {
  let data = await crudUser.login(req.body);
  res.cookie("refreshToken", data.data.token, {
    httpOnly: true,
    secure: false,
    path: "/",
    sameSite: "strict",
  });
  res.status(200).json(data);
};

module.exports = {
  getByID,
  login,
  create,
  update,
};
