import express from "express";

const router = express.Router();

const initWebRoutes = (app) => {
  
  

  return app.use("/", router);
};

module.exports = initWebRoutes;
