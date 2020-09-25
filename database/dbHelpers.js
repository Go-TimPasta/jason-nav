const db = require('.');
//hello paul
const dbHelpers = {
  getUsers: (callback) => {
    const queryStr = 'SELECT * FROM users';
    db.query(queryStr, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  },
  postUser: (data, callback) => {
    const queryStr = `INSERT INTO users (username, password, email) VALUES ('${data.username}', '${data.password}', '${data.email}')`;
    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
  getEntries: (callback) => {
    const queryStr = 'SELECT * FROM entry';
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
