const inquirer = require('inquirer');
const addDepartment = require('./src/add/addDepartment');
const addEmployee = require('./src/add/addEmployee');
const addRole = require('./src/add/addRole');
const getAllDepartments = require('./src/get/getAllDepartments');
const getAllEmployees = require('./src/get/getAllEmployees');
const getAllRoles = require('./src/get/getAllRoles');
const updateEmployeeRole = require('./src/update/updateEmployeeRole');

async function main() {
  let questions = {
    type: 'list',
    name: 'answer',
    message: 'what would you like to do?',
    choices: [
      'Get all Departments',
      'Get All Employees',
      'Get All Roles',
      'Add Department',
      'Add Role',
      'Add Employee',
      'Update Employee Role',
      'Quit',
    ],
  };

  let mainMenu = await inquirer.prompt(questions);

  if (mainMenu.answer == 'Get all Departments') {
    await getAllDepartments();
    main();
  } else if (mainMenu.answer == 'Get All Employees') {
    await getAllEmployees();
    main();
  } else if (mainMenu.answer == 'Get All Roles') {
    await getAllRoles();
    main();
  } else if (mainMenu.answer == 'Add Department') {
    await addDepartment();
    main();
  } else if (mainMenu.answer == 'Add Role') {
    await addRole();
    main();
  } else if (mainMenu.answer == 'Add Employee') {
    await addEmployee();
    main();
  } else if (mainMenu.answer == 'Update Employee Role') {
    await updateEmployeeRole();
    main();
  } else if (mainMenu.answer == 'Quit') {
    console.log('Bye!');
    process.exit();
  }
}

console.clear();
main();
