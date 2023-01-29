-- add seeds for your database here

USE employee_db;

INSERT INTO department (department_name)
VALUES ('Marketing'),
       ('Sales'),
       ('Engineering'),
       ('Human Resources'),
       ('Legal'),
       ('Finance'),
       ('Information Technology'),
       ('Customer Service');


INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 100000, 2),
       ('Salesperson', 80000, 2),
       ('Lead Engineer', 200000, 3),
       ('Software Engineer', 180000, 3),
       ('Account Manager', 160000, 1),
       ('Accountant', 140000, 6),
       ('Legal Team Lead', 200000, 5),
       ('Lawyer', 180000, 5),
       ('HR Lead', 200000, 4),
       ('HR Representative', 180000, 4),
       ('Customer Service Lead', 200000, 8),
       ('Customer Service Rep', 180000, 8),
       ('IT Lead', 200000, 7),
       ('IT Representative', 180000, 7);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, 1),
       ('Jane', 'Doe', 2, 1),
       ('John', 'Smith', 3, 2),
       ('Jane', 'Smith', 4, 2),
       ('John', 'Doe', 5, 3),
       ('Jane', 'Doe', 6, 3),
       ('John', 'Smith', 7, 4),
       ('Jane', 'Smith', 8, 4),
       ('John', 'Doe', 9, 5),
       ('Jane', 'Doe', 10, 5),
       ('John', 'Smith', 11, 6),
       ('Jane', 'Smith', 12, 6),
       ('John', 'Doe', 13, 7),
       ('Jane', 'Doe', 14, 7);