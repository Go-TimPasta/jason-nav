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

  getAllEntries: (callback) => {
    const queryStr = `SELECT * FROM entry`;
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

  deleteAll: (callback) => {
    const queryStr = `TRUNCATE TABLE entry`;
    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  updateEntry: (data, callback) => {
    let { id } = data.params;
    let { item } = data.body;
    const queryStr = `UPDATE entry SET item="${item}" WHERE id=${id}`;
    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },

  deleteEntry: (data, callback) => {
    let { id } = data.params;
    const queryStr = `DELETE FROM entry WHERE id=${id}`;
    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  }
};

module.exports = dbHelpers;
