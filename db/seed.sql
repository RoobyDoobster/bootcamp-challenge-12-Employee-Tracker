INSERT INTO departments (department_name)
VALUES ('Accounting'),
       ('Sales'),
       ('Information Technology'),
       ('Human Resources');

INSERT INTO roles (title, salary, department_id)
VALUES ('Accounting Manager', 150000.00, 1),
       ('Accountant', 100000.00, 1),

       ('Sales Manager', 135000.00, 2),
       ('Sales Specialist', 95000.00, 2),

       ('Systems Engineering Manager', 140000.00, 3),
       ('Network Administrator', 120000.00, 3),

       ('Human Resources Manager', 105000.00, 4),
       ('Human Resources Specialist', 95000.00, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Bruce', 'Wayne', 1, null),
       ('Richard', 'Grayson', 2, 1),

       ('Jason', 'Todd', 3, null),
       ('Tim', 'Drake', 4, 3),

       ('Barabara', 'Gordon', 5, null),
       ('Stephanie', 'Brown', 6, 5),

       ('Cassandra', 'Cain', 7, null),
       ('Damian', 'Wayne', 8, 7);