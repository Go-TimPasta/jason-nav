const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const dbHelpers = require('../database/dbHelpers.js');

const port = 8001;
const app = express();

//  bypass cors security
app.use(cors());

//  middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//  serve up static files on client
app.use(express.static(path.join(__dirname, '../client/dist')));

//  route to get users data if needed.
app.get('/user', (req, res) => {
  dbHelpers.getUsers((err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json(results);
    }
  });
});

//  route to insert username and password into DB
app.post('/user', (req, res) => {
  dbHelpers.postUser(req.body, (err) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send('SUCCESSFUL USER POST');
    }
  });
});

app.get('/entry', (req, res) => {
  dbHelpers.getEntries((err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json(results);
    }
  });
});

app.post('/entry', (req, res) => {
  dbHelpers.postEntry(req.body, (err) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send('SUCCESSFUL USER POST');
    }
  });
});

app.listen(port, () => console.log(`SUCCESSFUL CONNECTION LISTENING ON PORT #: ${port}`));
