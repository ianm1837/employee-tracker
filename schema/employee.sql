-- schema for employee table

-- id: INT PRIMARY KEY
-- first_name: VARCHAR(30) NOT NULL
-- last_name: VARCHAR(30) NOT NULL
-- role_id: INT NOT NULL
-- FOREIGN KEY (role_id) REFERENCES role(id)
-- manager_id: INT to hold reference to another employee that is the manager of the current employee. This field may be null if the employee has no manager
