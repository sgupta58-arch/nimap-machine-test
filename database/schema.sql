CREATE DATABASE nimap_machine_test;

USE nimap_machine_test;

CREATE TABLE categories (
  categoryId INT AUTO_INCREMENT PRIMARY KEY,
  categoryName VARCHAR(255) NOT NULL
);

CREATE TABLE products (
  productId INT AUTO_INCREMENT PRIMARY KEY,
  productName VARCHAR(255) NOT NULL,
  categoryId INT,
  FOREIGN KEY (categoryId) REFERENCES categories(categoryId)
);