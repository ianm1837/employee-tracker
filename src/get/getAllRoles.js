// getAllRoles
//   returns table with:
//   | job title | role id | department | salary |
const dbConnection = require('../dbConnection');
const cTable = require('console.table');

async function getAllRoles() {
  const dbResponse = await dbConnection(`SELECT * FROM employee_db.role;`);

  console.table('All Roles', [...dbResponse[0]]);

  return;
}


module.exports = getAllRoles;
