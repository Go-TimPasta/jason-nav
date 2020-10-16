const searches = require('.');


module.exports = {

  getEntries: (req, res) => {
    searches.find({
      'item': { '$regex': req, '$options': 'i' }
    }).limit(5)
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(404).send(err))
  },

  postEntry: (req, res) => {
    searches.create({ name: req.body.name, quantity: req.body.quantity })
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(404).send(err))
  },

}