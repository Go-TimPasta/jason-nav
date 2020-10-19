DROP DATABASE IF EXISTS navbardb;

CREATE DATABASE navbardb;

\c navbardb;

CREATE TABLE searches (
  id SERIAL PRIMARY KEY,
  item VARCHAR(200)
);