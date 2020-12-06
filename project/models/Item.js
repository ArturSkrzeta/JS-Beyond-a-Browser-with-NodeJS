var mongoose = require('mongoose')

var ItemSchema = mongoose.Schema({
  title: String,
  price: Number
})

module.exports = mongoose.model('Item', ItemSchema)
