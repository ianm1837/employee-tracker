// addEmployee
//   returns prompt:
//     enter first name (not null)
//     enter last name (not null)
//     pick role from list (validate: do not create employee if no roles exist not null)
//     pick manager from list (if there are any; can be null)

const dbConnection = require('../dbConnection');
const cTable = require('console.table');
const inquirer = require('inquirer');

async function getAllDepartments() {
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