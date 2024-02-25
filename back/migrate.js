const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

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

    await database.query(`DROP DATABASE IF EXISTS ${DB_NAME}`);

    await database.query(`CREATE DATABASE ${DB_NAME}`);

    await database.query(`USE ${DB_NAME}`);

    database.end();

    console.info(`${DB_NAME} created`);
  } catch (err) {
    console.error("Error updating the database:", err.message);
  }
};

migrate();
