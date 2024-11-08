CREATE DATABASE sci_astra;

USE sci_astra;

CREATE TABLE courses (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    discountedPrice DECIMAL(10, 2) NOT NULL,
    discounted BOOLEAN NOT NULL
);

CREATE TABLE blog_posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    scheduled_time DATETIME NOT NULL
);

CREATE TABLE transactions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    course_id INT,
    user_id INT,
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

INSERT INTO courses (name, price, discountedPrice, discounted) VALUES
('Introduction to AI', 99.99, 49.99, TRUE),
('Machine Learning Basics', 59.99, 29.99, TRUE),
('Web Development Bootcamp', 199.99, 99.99, TRUE);

INSERT INTO blog_posts (title, content, scheduled_time) VALUES
('AI in Healthcare', 'Exploring the role of AI in medical diagnostics...', '2024-11-01 10:00:00'),
('Web Development Trends', 'A look at the latest trends in web development...', '2024-11-03 12:00:00');

