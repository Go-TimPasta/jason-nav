const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const cors = require('cors');
const path = require('path');
const pool = require('../database/index.js')

const port = 8001;
const app = express();

//  bypass cors security
app.use(cors());

//  middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

//  serve up static files on client
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/entry', async(req, res) => {
  try {
    console.log(req.query);
    const { search } = req.query;
    const text = 'SELECT item FROM searches WHERE lower(item) LIKE lower($1) LIMIT 12';
    const values = [`${search}%`];
    const newSearch = await pool.query(text, values)
    res.json(newSearch.rows);
  } catch (err) {
    console.error(err.message)
  }
});

app.listen(port, () => console.log(`SUCCESSFUL CONNECTION LISTENING ON PORT: ${port}`));
