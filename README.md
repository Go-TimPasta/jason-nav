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

Then navigate to the database directory. Make sure that your MySQL server is running and seed the schema file with the command:

```sh
mysql -u root -p < schema.sql
```

Rename the configExample.js file to config.js and input the password for your MySQL server if you have one.

Go back to the root directory and run the seeding function scripts to import data into your schema:

```sh
npm run seed
npm run seed2
npm run seed3
npm run seed4
npm run seed5
npm run seed6
```

Run these scripts to start the server and serve the static files:

```sh
npm run build
npm start
```

Open up your browser and navigate to http://localhost:3003/

Every refresh/reload will render a random campsite!