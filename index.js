const inquirer = require('inquirer');
const mysql = require('mysql2');

// const PORT = process.env.PORT || 3008;
// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'movie_db'
  },
  console.log(`Connected to the movie_db database.`)
);