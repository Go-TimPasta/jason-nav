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

app.get('/entry', (req, res) => {
  console.log(req.query);
  dbHelpers.getEntries(req.query.search, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json(results);
    }
  });
});

app.get('/entries', (req, res) => {
  dbHelpers.getAllEntries((err, results) => {
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

app.delete('/entry', (req, res) => {
  dbHelpers.deleteAll((err) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send('Deleted everything!');
    }
  });
});

app.put('/entry/:id', (req, res) => {
  dbHelpers.updateEntry(req, (err) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send('Updated entry!');
    }
  });
});

app.delete('/entry/:id', (req, res) => {
  dbHelpers.deleteEntry(req, (err) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send('Deleted entry!');
    }
  });
});

app.listen(port, () => console.log(`SUCCESSFUL CONNECTION LISTENING ON PORT #: ${port}`));
