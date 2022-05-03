SELECT * FROM department;

INSERT INTO department (department_name)
    VALUES  (?);

SELECT * FROM employee;

SELECT * FROM job;

-- not quite working
SELECT employee.id, employee.first_name, employee.last_name, job.title, department.department_name, job.salary, employee.manager_id
FROM employee
JOIN job ON employee.job_id = job.id
JOIN department ON job.department_id = department.id;


SELECT department_name FROM department;



SELECT employee.id, employee.first_name, employee.last_name, job.title, department.department_name, job.salary, employee.manager_id FROM employee JOIN job ON employee.job_id = job.id JOIN department ON job.department_id = department.id;


SELECT job.title, job.salary, department.department_name
FROM job
JOIN department ON job.department_id = department.id;

SELECT job.title, job.salary, department.department_name FROM job JOIN department ON job.department_id = department.id;