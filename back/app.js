const express = require("express");
const dotenv = require("dotenv");
const routes = require("./src/router/router.js");
const Db = require("./database/database.js");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

const port = process.env.APP_PORT;

app.use(routes);

Db.sync()
  .then("Connecté à la BDD")
  .catch((err) => () => console.info(err));

app.listen(port, () => console.info(`Server is listening on port ${port}`));

module.exports = app;
