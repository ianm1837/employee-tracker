const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

const ENV = process.dotenv;

const dbConnection = await mysql.createConnection({
  host: ENV.host,
  user: ENV.user,
  password: ENV.password,
  database: ENV.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 3,
});



module.exports = dbConnection;
