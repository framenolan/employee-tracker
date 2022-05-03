const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_db'
  },
  console.log(`Connected to the movie_db database.`)
);

function selectAllQuery(table) {
  db.query('SELECT * FROM ?;', table, function (err, results) {
      const report = cTable.getTable('\n', results)
      console.log(report)
      console.log('==========')
    })
}


function addDepartment() {
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of the new Department?',
      name: 'dept',
    }
  ])
  .then((data) => {
    const answer = data.dept;

    db.query('INSERT INTO department (department_name) VALUES (?);', answer, function (err, results) {
      console.log("inside insert query")
      console.log(results)
    })
  })
  .then(() => {
    db.query('SELECT * FROM department;', function (err, results) {
      const report = cTable.getTable('\n', results)
      console.log(report)
    })
  })
  .then(() => menu());
}

function updateDept() {
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the ID of the department you want to update?',
      name: 'deptId',
    }
  ])
  .then((data) => {
    const answer = data.deptId;
    db.query('INSERT INTO department (department_name) VALUES (?);', answer, function (err, results) {
      console.log("inside insert query")
      console.log(results)
    })
  })
  .then(() => {
    db.query('SELECT * FROM department;', function (err, results) {
      const report = cTable.getTable('\n', results)
      console.log(report)
    })
    .then(() => menu());
  })
}

function addEmployee() {
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the first name of the new Employee?',
      name: 'firstName',
    },
    {
      type: 'input',
      message: 'What is the last name of the new Employee?',
      name: 'lastName',
    },
    {
      type: 'input',
      message: "What is the new employee's job ID?",
      name: 'jobId',
    },
    {
      type: 'input',
      message: "What is ID of the new employee's manager",
      name: 'managerId',
    }
  ])
  .then((data) => {
    const answer = data;
    console.log(answer)
    db.query('INSERT INTO employee (first_name, last_name, job_id, manager_id) VALUES (?);', answer, function (err, results) {
      console.log("inside insert query")
      console.log(results)
    })
  })
  .then(() => {
    db.query('SELECT * FROM employee;', function (err, results) {
      const report = cTable.getTable('\n', results)
      console.log(report)
    })
  })
  .then(() => menu());
}

function updateEmployee() {
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the ID of the department you want to update?',
      name: 'deptId',
    }
  ])
  .then((data) => {
    const answer = data.deptId;
    db.query('INSERT INTO department (department_name) VALUES (?);', answer, function (err, results) {
      console.log("inside insert query")
      console.log(results)
    })
  })
  .then(() => {
    db.query('SELECT * FROM department;', function (err, results) {
      const report = cTable.getTable('\n', results)
      console.log(report)
    })
    .then(() => menu());
  })
}

function addJob() {
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of the new Department?',
      name: 'dept',
    }
  ])
  .then((data) => {
    const answer = data.dept;

    db.query('INSERT INTO department (department_name) VALUES (?);', answer, function (err, results) {
      console.log("inside insert query")
      console.log(results)
    })
  })
  .then(() => {
    db.query('SELECT * FROM department;', function (err, results) {
      const report = cTable.getTable('\n', results)
      console.log(report)
    })
  })
  .then(() => menu());
}

function updateJob() {
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the ID of the department you want to update?',
      name: 'deptId',
    }
  ])
  .then((data) => {
    const answer = data.deptId;
    db.query('INSERT INTO department (department_name) VALUES (?);', answer, function (err, results) {
      console.log("inside insert query")
      console.log(results)
    })
  })
  .then(() => {
    db.query('SELECT * FROM department;', function (err, results) {
      const report = cTable.getTable('\n', results)
      console.log(report)
    })
    .then(() => menu());
  })
}
// Menu
function menu() {
  inquirer
  .prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'menu',
      choices: ['View List of Departments','Add a Department', 'Update Department Name', 'View List of Employees','Add an Employee', 'Update Employee Record','View List of Job Roles','Add a Job Role', 'Update Job Role', 'Quit'],
    }
  ])
  .then((answers) => {
    const choice = answers.menu
    switch (choice) {
      case 'View List of Departments':
        db.query('SELECT * FROM department;', function (err, results) {
          const report = cTable.getTable('\n', results)
          console.log(report)
          console.log('==========')
        })
        menu();
        break;
      case 'Add a Department':
        addDepartment();
        break;
      case 'Update Department Name':
        console.log("Update dept")
        updateDept();
        break;
      case 'View List of Employees':
        db.query('SELECT * FROM employee;', function (err, results) {
          const report = cTable.getTable('\n', results)
          console.log(report)
          console.log('==========')
        })
        menu();
        break;
      case 'Add an Employee':
        addEmployee();
        break;
      case 'Update Employee Record':
        updateDept();
        break;
      case 'View List of Job Roles':
        db.query('SELECT * FROM job;', function (err, results) {
          const report = cTable.getTable('\n', results)
          console.log(report)
          console.log('==========')
        })
        menu();
        break;
      case 'Add a Job Role':
        addJob();
        break;
      case 'Update Job Role':
        updateJob();
        break;
      case 'Quit':
        process.exit();
      default:
        console.log("Whoopsie")
        menu();
    }
  })
}


menu()