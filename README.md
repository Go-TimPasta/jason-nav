# Getsy Nav Bar

This is an application that was centered around inheriting gEtsy's legacy codebase and then extending the capabilities of the database and server layer to support production-level traffic while maintaing its service-oriented architecture. In essence, my mission was to build the server and database to handle large quantities of data and traffic.

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

## Setup

Open up the terminal and from within the root directory, run the following commands:

```sh
npm install
npm run csv
```

The "npm run csv" creates a CSV file in the root directory named "entries.csv"

Navigate to the database directory and import the schema into Postgres by running the command:

```sh
psql postgres < schema.sql
```

And then the seeding script:

```sh
npm run seed
```

Go back to the root diretory and run these scripts to start the server and serve the static files:

```sh
npm run build
npm start
```

Open up your browser and navigate to http://localhost:8001/

Every refresh/reload will render a random campsite!