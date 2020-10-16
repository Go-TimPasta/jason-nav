const db = require('.');

const dbHelpers = {

  getEntries: (searchItem, callback) => {
    const queryStr = `SELECT item FROM entry WHERE item LIKE '${searchItem}%' LIMIT 12;`;
    db.query(queryStr, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  },

  postEntry: (data, callback) => {
    const queryStr = `INSERT INTO entry (item) VALUES ('${data.item}')`;
    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

};

module.exports = dbHelpers;
