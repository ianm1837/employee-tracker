// addDepartment
//   returns prompt:
//     What is the name of the department you would like to add?
//     Then adds requested department to database
//     returns success message

const dbConnection = require('../dbConnection');
const cTable = require('console.table');
const inquirer = require('inquirer');

async function addDepartment() {
  const departmentName = await getDepartmentName();

  try {
    const dbResponse = await dbConnection(
      `INSERT INTO department (department_name) VALUES ('${departmentName}')`
    );
  } catch (err) {
    console.log(err);
  }

  return;
}

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

module.exports = addDepartment;
