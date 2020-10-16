# Getsy Nav Bar

This repository is an optimization to improve large for the Getsy Navigation Bar.

## Related Projects

  - https://github.com/Go-TimPasta/tim-related
  - https://github.com/Go-TimPasta/nick-reviews
  - https://github.com/Go-TimPasta/SellerDescription


## Table of Contents

1. [CRUD Operations](#CRUD)
2. [Setup](#Setup)


## CRUD

| Endpoint          | Type   | Operation                 |
|-------------------|--------|---------------------------|
| `/entry`          | GET    | Get all entries           |
|                   |        | according to the search   |
| `/entries`        | GET    | Get all entries           |
| `/entry`          | POST   | Post an entry             |
| `/entry/:id`      | PUT    | Update an entry           |
| `/entry/:id`      | DELETE | Delete an entry           |

## Setup

Open up the terminal and from within the root directory, install the dependencies by running the command:

```sh
npm install
```

Then navigate to the 'postgresql' directory. Make sure that the PostgreSQL server is running and seed the schema file with the command:

```sh
psql postgresql < schema.sql
```
This will create your database and table/schema inside the PostgreSQL server.

Rename the configExample.json file to config.json and input the necessary information for the PostgreSQL server.

Navigate back to the root directory and run this command to create your .csv file.

```sh
npm run csv
```

IMPORTANT! Make sure you have "mongoimport" installed onto your local machine before moving onto the next step.

Enter this in the terminal and not the mongo shell.

```sh
mongoimport --type csv -d navBarDB -c searches --headerline --drop entries.csv
```

Run the seeding script to import data into your PostgreSQL schema:

```sh
npm run seed
```

Run these scripts to start the server and serve the static files:

```sh
npm run build
npm start
```

Open up your browser and navigate to http://localhost:8001/

Every refresh/reload will render a random campsite!