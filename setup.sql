-- Creating the database
CREATE DATABASE file_sharing_app;

-- Connecting to the database
\c file_sharing_app;

-- Creating tables
CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password TEXT
);
