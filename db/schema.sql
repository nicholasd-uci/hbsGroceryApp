DROP DATABASE IF EXISTS grocery_db;

-- this is grabbed from workbench --
CREATE DATABASE grocery_db;

USE grocery_db;
CREATE TABLE groceries (
        id INT UNSIGN AUTO_INCREMENT NOT NULL PRIMARY KEY,
        name VARCHAR(20) UNIQUE NOT NULL,
        quantity INT UNSIGNED NOT NULL
        cost DOUBLE UNSIGNED NOT NULL
);