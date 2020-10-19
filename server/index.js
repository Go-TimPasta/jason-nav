const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const cors = require('cors');
const path = require('path');
const dbHelpers = require('../mongo/controllers.js');

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

app.get('/entry', (req, res) => {
  console.log(req.query);
  mdbHelpers.getEntries(req.query.search, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).json(results);
    }
  });
});

app.listen(port, () => console.log(`SUCCESSFUL CONNECTION LISTENING ON PORT: ${port}`));
