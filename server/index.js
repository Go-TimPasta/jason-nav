const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const dbHelpers = require('../database/dbHelpers.js');
const port = 8000;
const app = express();


//bypass cors security
app.use(cors());

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//serve up static files on client
app.use(express.static(path.join(__dirname, '../client/dist')));

//routes
app.get('/products', (req, res) => {
  res.status(200).send('HELLO FROM GET')
})

app.listen(port, () => console.log(`SUCCESSFUL CONNECTION LISTENING ON PORT #: ${port}`));

