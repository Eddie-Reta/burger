### Schema
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE  burgers 
(
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY(id)

);
