DROP DATABASE IF EXISTS navbardb;

CREATE DATABASE navbardb;

\c navbardb;

CREATE TABLE searches (
  item TEXT NOT NULL
);