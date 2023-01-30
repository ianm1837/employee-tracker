const dbConnection = require('../dbConnection');
const cTable = require('console.table');
const inquirer = require('inquirer');

async function getDepartmentName() {
  function requireUserInput(input) {
    if (input == '') {
      return 'Entry cannot be blank!';
    }

    return true;
  }

  const inquirerDepartmentName = await inquirer.prompt({
    type: 'input',
    name: 'departmentName',
    message: 'What would you like to name the Department?',
    validate: requireUserInput,
  });

  return inquirerDepartmentName.departmentName;
}

async function addDepartment() {
  const departmentName = await getDepartmentName();

  try {
    const dbResponse = await dbConnection(
      `INSERT INTO department (department_name) VALUES ('${departmentName}')`
    );
    console.log(`Successfully added ${departmentName}!`);
  } catch (err) {
    console.log(err);
  }

  return;
}

module.exports = addDepartment;
