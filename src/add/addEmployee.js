// addEmployee
//   returns prompt:
//     enter first name (not null)
//     enter last name (not null)
//     pick role from list (validate: do not create employee if no roles exist not null)
//     pick manager from list (if there are any; can be null)

const dbConnection = require('../dbConnection');
const cTable = require('console.table');
const inquirer = require('inquirer');

async function addEmployee() {
  function requireUserInput(input) {
    if (input == '') {
      return 'Entry cannot be blank!';
    }

    return true;
  }

  const [availableManagers] = await dbConnection(`
    SELECT 
      manager.employee_id AS value, CONCAT('id: ', manager.employee_id, ' ' , manager.first_name, ' ', manager.last_name, ' - ', role.title) AS 'name'

    FROM employee

    INNER JOIN employee AS manager ON employee.manager_id=manager.employee_id
    INNER JOIN role ON role.role_id=manager.role_id

    GROUP BY manager.employee_id
  `);

  const [availableRoles] = await dbConnection(
    `SELECT role_id AS value, title AS name FROM role`
  );

  const newEmployeeInfo = await inquirer.prompt([
    {
      type: 'input',
      name: 'employeeFirstName',
      message: 'Enter First Name',
      validate: requireUserInput,
    },
    {
      type: 'input',
      name: 'employeeLastName',
      message: 'Enter Last Name:',
      validate: requireUserInput,
    },
    {
      type: 'list',
      name: 'employeeRole',
      message: 'Pick the new Employees role',
      choices: availableRoles,
    },
    {
      type: 'list',
      name: 'employeeManager',
      message: 'Pick the new Employees manager',
      choices: availableManagers,
    },
  ]);

  console.log(newEmployeeInfo);

  await dbConnection(
    `INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES ('${newEmployeeInfo.employeeFirstName}', '${newEmployeeInfo.employeeLastName}', ${newEmployeeInfo.employeeRole}, ${newEmployeeInfo.employeeManager})`
  );
}

module.exports = addEmployee;
