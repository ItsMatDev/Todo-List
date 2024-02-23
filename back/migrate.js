import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const migrate = async () => {
  try {
    const database = await mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      multipleStatements: true,
    });

    await database.query(`drop database if exists ${DB_NAME}`);

    await database.query(`create database ${DB_NAME}`);

    await database.query(`use ${DB_NAME}`);

    database.end();

    console.info(`${DB_NAME} created`);
  } catch (err) {
    console.error("Error updating the database:", err.message);
  }
};

migrate();
