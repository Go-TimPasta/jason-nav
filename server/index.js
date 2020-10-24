const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const pool = require('../database/index.js');
const compression = require('compression');
require('newrelic');

const port = 8001;
const app = express();

//  bypass cors security
app.use(cors());

//  middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());

//  serve up static files on client
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/entry', async(req, res) => {
  try {
    const { search } = req.query;
    const text = 'SELECT item FROM searches WHERE lower(item) LIKE lower($1) LIMIT 12';
    const values = [`${search}%`];
    const newSearch = await pool.query(text, values)
    res.json(newSearch.rows);
  } catch (err) {
  }
});

// app.get('/loaderio-9ea8c96871365d13e898c249ae28a94c', (req, res) => {
//   res.send('loaderio-9ea8c96871365d13e898c249ae28a94c');
// })

app.listen(port);
