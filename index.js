// INQUIERER load menu with the following options

//  view all departments
//  view all roles
//  view all employees
//  add a department
//  add a role
//  add an employee
//  update an employee role



// QUERIES
// ==========================================================================================

// getAllDepartments
//   returns table with:
//   | department names | department id's |

// getAllRoles
//   returns table with: 
//   | job title | role id | department | salary |

// getAllEmployees
//   returns table with: 
//   | employee id | first name | last name | job title | department | salary | manager |

// ==========================================================================================

// addDepartment
//   returns prompt:
//     What is the name of the department you would like to add?
//     Then adds requested department to database
//     returns success message

// addRole
//   returns prompt:
//     do no run prompt if no departments exist
//     enter role name (not null)
//     enter salary (not null)
//     pick department from list 
//       validate department exist

// addEmployee
//   returns prompt:
//     enter first name (not null)
//     enter last name (not null)
//     pick role from list (validate: do not create employee if no roles exist not null)
//     pick manager from list (if there are any; can be null)

// ==========================================================================================

// updateEmployeeRole
//   returns prompt:
//     pick from list of employees
//     enter employee role id

// updateEmployeeManager
//   returns prompt:
//     pick from a list of employees
//     enter new manager
//     

// ==========================================================================================