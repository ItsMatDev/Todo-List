import { DataTypes } from "sequelize";
import db from "../database/database.js";

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

export default Task;
