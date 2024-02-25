const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

module.exports = new Sequelize("todo_list", process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: "mysql",
  host: process.env.DB_HOST,
});
