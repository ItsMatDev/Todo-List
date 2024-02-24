import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export default new Sequelize("todo_list", process.env.DB_USER, process.env.DB_PASSWORD, { dialect: "mysql", host: process.env.DB_HOST });