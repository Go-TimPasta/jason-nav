-- codereview
DROP DATABASE IF EXISTS navBarDB;

CREATE DATABASE navBarDB;

USE navBarDB;

CREATE TABLE users (
  id int auto_increment not null primary key,
  username varchar(255) not null,
  password varchar(255) not null,
  email varchar(255) not null
);

CREATE TABLE entry (
  id int auto_increment not null primary key,
  item varchar(255) not null
);