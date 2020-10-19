// Import required modules
const fs = require('fs');
const path = require('path');
const { Client } = require('pg')
const copyFrom = require('pg-copy-streams').from
const config = require('./config.json')

// inputfile & target table
var inputFile = path.join(__dirname, '../entries.csv')
var table = 'searches'

// Getting connectin parameters from config.json
const host = config.host
const user = config.user
const pw = config.pw
const db = config.db
const port = config.port
const conString = `postgres://${user}:${pw}@${host}:${port}/${db}`

// Connecting to Database
const client = new Client({
  connectionString: conString,
})

client.connect()

const executeQuery = (targetTable) => {
  const execute = (target, callback) => {
      client.query(`Truncate ${target}`, (err) => {
              if (err) {
              client.end()
              callback(err)
              // return console.log(err.stack)
              } else {
              console.log(`Truncated ${target}`)
              callback(null, target)
              }
          })
  }
  execute(targetTable, (err) =>{
      if (err) return console.log(`Error in Truncate Table: ${err}`)
      var stream = client.query(copyFrom(`COPY ${targetTable}(item) FROM STDIN DELIMITER ',' CSV HEADER`))
      var fileStream = fs.createReadStream(inputFile)

      fileStream.on('error', (error) =>{
          console.log(`Error in creating read stream ${error}`)
      })
      stream.on('error', (error) => {
          console.log(`Error in creating stream ${error}`)
      })
      stream.on('finish', () => {
          console.log(`Completed loading data into ${targetTable}`)
          client.end()
      })
      fileStream.pipe(stream);
  })
}
// Execute the function
executeQuery(table);
