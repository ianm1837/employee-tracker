const inquirer = require('inquirer');
const addDepartment = require('./src/add/addDepartment');
const addEmployee = require('./src/add/addEmployee');
const addRole = require('./src/add/addRole');
const getAllDepartments = require('./src/get/getAllDepartments');
const getAllEmployees = require('./src/get/getAllEmployees');
const getAllRoles = require('./src/get/getAllRoles');
const updateEmployeeManager = require('./src/update/updateEmployeeManager');
const updateEmployeeRole = require('./src/update/updateEmployeeRole');

async function main() {
  let answer = inquirer.createPromptModule({
    type: 'list',
    message: 'what would you like to do?',
    choices: [
      'Get all Departments',
      'Get All Employees',
      'Get All Roles',
      'Add Department',
      'Add Role',
      'Add Employee',
      'Update Employee Manager',
      'Update Employee Role',
      'Quit',
    ],
  });

  if (answer == 'Get all Departments') {
    await getAllDepartments;
  } else if (answer == 'Get All Employees') {
    await getAllEmployees;
  } else if (answer == 'Get All Roles') {
    await getAllRoles;
  } else if (answer == 'Add Department') {
    await addDepartment;
  } else if (answer == 'Add Role') {
    await addRole;
  } else if (answer == 'Add Employee') {
    await addEmployee;
  } else if (answer == 'Update Employee Manager') {
    await updateEmployeeManager;
  } else if (answer == 'Update Employee Role') {
    await updateEmployeeRole;
  } else if (answer == 'Quit') {
    console.log('Bye!');
    process.exit();
  }
}

main();
