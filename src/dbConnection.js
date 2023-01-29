const mysql = require('mysql2/promise');
require('dotenv').config();

const ENV = process.env;

async function dbConnection(command) {
  const connection = await mysql.createConnection({
    host: ENV.EMPLOYEE_DB_HOST,
    user: ENV.EMPLOYEE_DB_USERNAME,
    password: ENV.EMPLOYEE_DB_PASSWORD,
    database: ENV.EMPLOYEE_DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 3,
  });

  let queryResponse = await connection.query(command);

  return queryResponse;
}

module.exports = dbConnection;
