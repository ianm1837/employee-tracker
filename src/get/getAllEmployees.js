// getAllEmployees
//   returns table with:
//   | employee id | first name | last name | job title | department | salary | manager |
const dbConnection = require('../dbConnection');
const cTable = require('console.table');

async function getAllEmployees() {
  const dbResponse = await dbConnection(`SELECT * FROM employee_db.employee;`);

  //TODO: Get names of employees department

  //TODO: Get name of job title (role)

  //TODO: Get salary from role

  //TODO: Get Manager name

  console.table('All Employees', [...dbResponse[0]]);

  return;
}

module.exports = getAllEmployees;
