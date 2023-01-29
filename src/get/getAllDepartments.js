const dbConnection = require('../dbConnection');
const cTable = require('console.table');

async function getAllDepartments() {
  const dbResponse = await dbConnection(
    `SELECT * FROM employee_db.department;`
  );

  console.table('All Departments', [...dbResponse[0]]);

  return;
}

module.exports = getAllDepartments;
