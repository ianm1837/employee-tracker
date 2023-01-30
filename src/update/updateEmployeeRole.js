// updateEmployeeRole
//   returns prompt:
//     pick from list of employees
//     enter employee role id

const dbConnection = require('../dbConnection');
const cTable = require('console.table');
const inquirer = require('inquirer');

async function updateEmployeeRole() {
  function requireUserInput(input) {
    if (input == '') {
      return 'Entry cannot be blank!';
    }

    return true;
  }

  function checkIfInt(input) {
    if (isNaN(input)) {
      return 'Your entry must be a number!';
    }
    return true;
  }

  const [availableEmployees] = await dbConnection(
    `SELECT CONCAT(employee.first_name, ' ', employee.last_name) AS 'name', employee_id AS value FROM employee;`
  );

  const [availableRoles] = await dbConnection(
    `SELECT role_id AS value, title AS name FROM role`
  );

  const updateRole = await inquirer.prompt([
    {
      type: 'list',
      name: 'employee',
      message: 'Select Employee: ',
      choices: availableEmployees,
    },
    {
      type: 'list',
      name: 'newRole',
      message: 'Select employees new role: ',
      choices: availableRoles,
    },
  ]);

  console.log(updateRole);

  await dbConnection(
    `UPDATE employee SET role_id=${updateRole.newRole} WHERE employee_id=${updateRole.employee};`
  );

  console.log(`Role has been updated`);
}

module.exports = updateEmployeeRole;