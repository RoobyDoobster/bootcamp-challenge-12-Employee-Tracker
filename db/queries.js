const mysql = require("mysql2");
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Ruby10879',
        database: 'company_db'
    },
    console.log('Connected to company_db')
);

function selectDepartment() {
    db.query(`SELECT * FROM company_db.departments;`, (err, result) => {
        if(err) {
            console.log(err);
        }
        console.log(`\n`);
        console.table(result);
    });
}

function insertDepartment(string) {
    db.query(`INSERT INTO departments (department_name) VALUES (?);`, string, (err, result) => {
        if(err) {
            console.log(err);
        }
        console.log(`\n`);
        console.table('Result added');
    });
}

function selectRole() {
    db.query(`SELECT roles.id, roles.title, roles.salary, departments.department_name
    FROM roles
    INNER JOIN departments ON roles.department_id = departments.id;`, (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(`\n`);
        console.table(result);
    });
}

function insertRole(string, decimal, integer) {
    db.query(`INSERT INTO roles (title, salry, department_id) VALUES (?, ?, ?,);`, [string, decimal, integer], (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(`\n`);
        console.table(`Result added.`);
    });
}

function selectEmployee() {
    db.query(`SELECT employees.id as employee_id, employees.first_name, employees.last_name, roles.title, roles.salary, departments.department_name, 
    CONCAT(managers.first_name, " ", managers.last_name) AS manager_name
    FROM roles
    INNER JOIN employees ON roles.id = employees.role_id
    LEFT JOIN departments ON roles.department_id = departments.id
    LEFT JOIN employees managers ON employees.manager_id = managers.id;`, (err, result) => {
        if(err) {
            console.log(err);
        }
        console.log(`\n`);
        console.table(result);
    });
}

function insertEmployee(string, decimal, integer, manager_integer) {
    db.query(`INSERT INTO employees (title, salary, department_id, manager_id) VALUES (?, ?, ?, ?);`, [string, decimal, integer, manager_integer], (err, result) => {
        if(err) {
            console.log(err);
        }
        console.log(`\n`);
        console.table(`Result added.`);
    });
}

function updateEmployee(id, role_id) {
    db.query(`UPDATE employee SET role_id=? WHERE id=?`, [role_id, id], (err, result) => {
        if(err) {
            console.log(err);
        }
        console.log(`\n`);
        console.table(result);
    });
}

module.exports = { selectDepartment, insertDepartment, selectRole, insertRole, selectEmployee, insertEmployee, updateEmployee}