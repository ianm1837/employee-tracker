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

-- create managers

INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Jennifer', 'Mcguire', 1),
       ('Darrin', 'Bush', 2),
       ('Kathleen', 'Leonard', 3),
       ('Candace', 'Brock', 4),
       ('Meredith', 'Henderson', 5),
       ('Ronald', 'Lane', 6),
       ('Harriet', 'Lane', 7),
       ('Gabriel', 'Holmes', 8),
       ('Rachel', 'Gray', 9),
       ('Jackie', 'Robertson', 10),


-- create employees

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Fred', 'Hunter', 1, 1),
       ('Bobbie', 'Harrington', 2, 1),
       ('Jill', 'Russell', 3, 2),
       ('Elvira', 'Hopkins', 4, 2),
       ('Kellie', 'Maldonado', 5, 3),
       ('Kara', 'Glover', 6, 3),
       ('Cameron', 'Perry', 7, 4),
       ('Dennis', 'Wolfe', 8, 4),
       ('Salvatore', 'Warner', 9, 5),
       ('Frankie', 'Fletcher', 10, 5),
