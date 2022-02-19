require("dotenv").config();
import express from "express";
import getConnection from "./config/connectDB";
import initWebRoutes from "./routes/api";
//import cors from "cors";

const app = express();

// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// Config app
//app.use(cors({ origin: true }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({extended: true, limit: '50mb'}));

initWebRoutes(app);

// Connet dbConnection
getConnection();

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is running at ${port}`));