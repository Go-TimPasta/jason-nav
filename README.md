# Getsy Nav Bar

## Table of Contents

1. [Summary](#Summary)
2. [Result](#Result)
4. [Setup](#Setup)

## Summary

In essence, this application was centered around inheriting Getsy's legacy codebase and then extending the capabilities of the database and server layer to support production-level traffic while maintaing its service-oriented architecture. This entitled implementing techniques such as indexing, compression, clustering, horizontal scaling, and caching. To learn more, feel free to email me at jasonhon1240@gmail.com.

## Result

After horizontally scaling the service on 4 AWS EC2 t2.micro instances and utilizing round robin load balancing with content caching on my NGINX proxy server, I was able to handle 10,000 requests per second with a 0.0% error rate and an average latency of 62 ms.

![Screenshot](pictures/result.png)


| FROM             | TO              |
|------------------|-----------------|
| 3727 ms          | 62 ms           |
| 45.3% error rate | 0.0% error rate |

This equates to...

| SPEED            | ERROR RATE      |
|------------------|-----------------|
| **98.34%** improvement in speed  | **100%** error reduction  |
| It takes **1.66%** of the time it did before! |



This is in comparison to the


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