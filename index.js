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
  console.log(`Connected to the database.`)
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
        name: 'dept'
      }
    ])
    .then((data) => {
      console.log(data)
      const answer = data.dept;
      console.log(answer)
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
}

function updateDept() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the name of the department you want to update?',
        name: 'deptName',
      }
    ])
    .then((data) => {
      const answer = data.deptName;
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
}

function addEmployee() {

  // db.promise().query('SELECT * FROM department;', function (err, results) {
  //   const report = cTable.getTable('\n', results)
  //   console.log(report)
  // })
  // const [rows, fields] = await db.execute('SELECT * FROM `employee` WHERE `manager` = ? AND `id` > ?', ['Morty', 14]);

  // console.log([rows, fields])
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
        type: 'list',
        message: "What is the new employee's job role?",
        name: 'jobName',
        choices:
          [
            'Intern',
            'Manager',
            'Director'
          ]
      },
      {
        type: 'input',
        message: "What is ID of the new employee's manager",
        name: 'managerId',
      }
    ])
    .then((data) => {
      // I don't think this is going to work...
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
}

// Not finished yet
function updateEmployee() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the ID of the employee you want to update?',
        name: 'employeeId',
      }
    ])
    .then((data) => {
      const answer = data.employeeId;
      db.query('INSERT INTO employee (department_name) VALUES (?);', answer, function (err, results) {
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
}

// const [rows, fields] = await db.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);

function addJob() {
  console.log("line 148")
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the name of the new role?',
        name: 'job',
      },
      {
        type: 'input',
        message: 'What is the salary of the new role?',
        name: 'salary',
      },
      {
        type: 'input',
        message: 'What department (id) is the new role in?',
        name: 'dept',
      }
    ])
    .then((data) => {
      const answer = [data.job, data.salary, data.dept];
      console.log("line 168")
      db.query('INSERT INTO job (job_name) VALUES (?);', answer, function (err, results) {
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
}

// Not touched yet...
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
    })
}

// Menu
function menu() {
  console.log('\n')
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What would you like to do?',
        name: 'menu',
        choices: ['View All Departments', 'Add a Department', 'Update Department Name', 'View All Employees', 'Add an Employee', 'Update Employee Record', 'View All Job Roles', 'Add a Job Role', 'Update Job Role', 'Quit'],
      }
    ])
    .then((answers) => {
      const choice = answers.menu
      console.log(choice)
      switch (choice) {
        case 'View All Departments':
          console.log(choice)  
          db.query('SELECT * FROM department;', function (err, results) {
            const report = cTable.getTable('\n', results)
            console.log(report)
            console.log('==========')
          })
          break;
        case 'Add a Department':
          addDepartment();
          break;
        case 'Update Department Name':
          console.log("Update dept")
          updateDept();
          break;
        case 'View All Employees':
          console.log('F')
          db.query('SELECT employee.id, employee.first_name, employee.last_name, job.title, department.department_name, job.salary, employee.manager_id FROM employee JOIN job ON employee.job_id = job.id JOIN department ON job.department_id = department.id;', function (err, results) {
            const report = cTable.getTable('\n', results)
              console.log(report)
              console.log('==========')
            })
          break;
        case 'Add an Employee':
          addEmployee();
          break;
        case 'Update Employee Record':
          updateDept();
          break;
        case 'View All Job Roles':
          console.log('G')
          db.query('SELECT job.title, job.salary, department.department_name FROM job JOIN department ON job.department_id = department.id;', function (err, results) {
            const report = cTable.getTable('\n', results)
            console.log(report)
            console.log('==========')
          })
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
      }
    })
    .then(() => menu());
}


menu()