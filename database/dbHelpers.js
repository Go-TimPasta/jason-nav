const searches = require('.');


module.exports = {

  getEntries: (searchItem, callback) => {
    const queryStr = `SELECT item FROM searches WHERE item ILIKE '${searchItem}%' LIMIT 12`;
    db.query(queryStr, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  },

};