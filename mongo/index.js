const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/navBarDB', {useNewUrlParser: true})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {  console.log(`currently listening on ${db.host}:${db.port}`)});

const navBarSchema =  new mongoose.Schema({
  item: String
});

module.exports = mongoose.model('searches', navBarSchema);