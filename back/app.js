import express from "express";
import dotenv from "dotenv";
import routes from "./src/router/router.js";
import Db from "./src/database/database.js";
import cors from "cors";

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
