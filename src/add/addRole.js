//  TODO: do no run prompt if no departments exist

const dbConnection = require('../dbConnection');
const cTable = require('console.table');
const inquirer = require('inquirer');

async function addRole() {
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

  const [availableDepartments] = await dbConnection(
    `SELECT department_id AS value, department_name AS name FROM department;`
  );

  const newRole = await inquirer.prompt([
    {
      type: 'input',
      name: 'roleName',
      message: 'Enter new Role name: ',
      validate: requireUserInput,
    },
    {
      type: 'number',
      name: 'salary',
      message: 'Enter Salary for new Role: ',
      validate: checkIfInt,
    },
    {
      type: 'list',
      name: 'department',
      message: 'Pick which department this role will be in',
      choices: availableDepartments,
    },
  ]);

  console.log(newRole);

  await dbConnection(
    `INSERT INTO role (title, salary, department_id)
    VALUES ('${newRole.roleName}', ${newRole.salary}, ${newRole.department})`
  );

  console.log(`${newRole.roleName} has been added.`);
}

module.exports = addRole;
