const { DataTypes } = require("sequelize");
const db = require("./database.js");

const Task = db.define("task", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Task;
