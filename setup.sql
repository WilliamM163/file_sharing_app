-- Creating the database
CREATE DATABASE file_sharing_app;

-- Connecting to the database
\c file_sharing_app;

-- Creating tables (many to many relationship)
CREATE TABLE users (
    email TEXT PRIMARY KEY,
    name TEXT,
    password TEXT
);

CREATE TABLE files (
    path TEXT PRIMARY KEY,
    original_name TEXT,
    size BIGINT,
    uploaded_at TIME DEFAULT CURRENT_TIME,
    owner TEXT REFERENCES users(email)
);

CREATE TABLE users_files (
    email TEXT REFERENCES users(email),
    path TEXT REFERENCES files(path),
    PRIMARY KEY (email, path)
);