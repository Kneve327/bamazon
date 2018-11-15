DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(45) NOT NULL,
department_name VARCHAR(45) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INT NOT NULL,
PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cropped Tank", "Clothing", 15, 21);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Skinny Jeans", "Clothing", 27.99, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Strawberries", "Produce", 5.99, 16);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bananas", "Produce", .99, 18);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Whole Chicken", "Poultry", 7.52, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Monopoly", "Entertainment", 15.89, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Uno", "Entertainment", 4.50, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Grease", "Movies", 22.99, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Star Wars Spaceship", "Toys", 47.89, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone 8 - 64 GB", "Electronics", 599, 12);