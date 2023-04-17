import express from "express";
import userController from "../controllers/userController";
import businessController from "../controllers/businessControllser";
import postController from "../controllers/postController";
import jobController from "../controllers/jobController";
import languageController from "../controllers/languegController";
import typejobController from "../controllers/typejobController";
import addressController from "../controllers/addressController";
import serviceController from "../controllers/serviceController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", (req, res) => {
    res.send("backend");
  });

  //user
  router.get("/api/user/get-by-id/:id", userController.getByID);
  router.post("/api/user/login", userController.login);
  router.post("/api/user/create", userController.create);
  router.put("/api/user/update/", userController.update);
  // router.delete("/api/user/delete/:id", userController.remove);

  //business
  router.get("/api/business/get-all", businessController.getAll);
  router.get("/api/business/get-by-id/:id", businessController.getByID);
  router.get(
    "/api/business/get-all-service/:id",
    businessController.getAllService
  );

  router.post("/api/business/login", businessController.login);
  router.post("/api/business/create", businessController.create);
  router.put("/api/business/update", businessController.update);

  //post
  router.get("/api/post/get-all", postController.getAll);
  router.post("/api/post/create", postController.create);
  router.post("/api/post/create/post-service", postController.postService);

  //job
  router.get("/api/job/get-all", jobController.getAll);
  router.get("/api/job/get-by-id/:id", jobController.getById);
  router.post("/api/job/create", jobController.create);
  router.get("/api/job/get-job-by-business/:id", jobController.getByBusiness);

  //language
  router.get("/api/language/get-all", languageController.getAll);

  //typeJob
  router.get("/api/type-job/get-all", typejobController.getAll);

  //address
  router.post("/api/address/create", addressController.create);
  router.get("/api/address/get-all/:id", addressController.getAll);
  router.put("/api/address/update", addressController.update);

  //service
  // router.get("/api/service/get-all/:id", serviceController.getByBusiness);
  return app.use("/", router);
};

export default initWebRoutes;
