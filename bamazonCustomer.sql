DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
	item_id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
    product_name VARCHAR(40) NOT NULL,
    department_name VARCHAR(40) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER(10)NOT NULL

);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES  (1, "Dove Shampoo", "Cosmetics", 5.75, 500),
				(2, "Dove Conditioner", "Cosmetics", 6.25, 627),
				(3, "Glad 12 Gal Trash Bags", "Grocery", 5.99, 300),
				(4, "Brawny Paper" "Towels", "Grocery", 4.25, 400),
				(5, "Granny Smith Apples", "Produce", 0.35, 800),
				(6, "Chiquita Bannana", "Produce", 0.20, 10000),
				(7, "Tropicana Orange Juice", "Grocery", 4.45, 267),
				(8, "Horizon Organic Milk", "Grocery", 4.50, 200),
				(9, "Huggies Diapers", "Children", 2.75, 476),
				(10, "Charmin Toiler Paper", "Grocery", 12.99, 575);