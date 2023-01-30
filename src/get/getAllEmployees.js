const dbConnection = require('../dbConnection');
const cTable = require('console.table');

async function getAllEmployees() {
  const dbResponse = await dbConnection(`
  SELECT 
	employee.employee_id AS ID, 
	employee.first_name AS 'First Name', 
	employee.last_name AS 'Last Name', 
	role.title AS 'Job Title', 
	department.department_name As 'Department', 
	role.salary AS 'Salary',
    CONCAT(manager.first_name, ' ', manager.last_name) AS Manager

  FROM employee

  JOIN role ON role.role_id=employee.role_id
  JOIN department ON role.department_id=department.department_id
  LEFT JOIN employee AS manager ON employee.manager_id=manager.employee_id

  ORDER BY ID
  `);

  console.table('All Employees', [...dbResponse[0]]);

  return;
}

module.exports = getAllEmployees;
