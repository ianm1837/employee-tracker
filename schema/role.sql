-- schema for role table

-- id: INT PRIMARY KEY
-- title: VARCHAR(30) NOT NULL
-- salary: DECIMAL NOT NULL
-- department_id: INT NOT NULL
-- FOREIGN KEY (department_id) REFERENCES department(id)