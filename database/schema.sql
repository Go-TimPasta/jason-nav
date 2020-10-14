-- codereview
DROP DATABASE IF EXISTS navBarDB;

CREATE DATABASE navBarDB;

USE navBarDB;

CREATE TABLE entry (
  id int auto_increment not null primary key,
  item varchar(255) not null
);