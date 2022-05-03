USE employee_db;

INSERT INTO department (department_name)
VALUES ("HR"),
       ("Marketing"),
       ("R&D"),
       ("Legal"),
       ("Intern");

INSERT INTO job (title, salary, department_id)
VALUES  ("Director", 150000, 1),
        ("Intern", 70000, 5),
        ("Manager", 115000, 2),
        ("Manager", 115000, 3);

INSERT INTO employee (first_name, last_name, job_id, manager_id)
VALUES  ("Brenda", "Savoy", 1, NULL),
        ("Kenny", "Smith", 2, 1),
        ("Katherine", "Knowles", 3, NULL),
        ("John", "Oddfellow", 4, 1);

SELECT * FROM department;
SELECT * FROM job;
SELECT * FROM employee;