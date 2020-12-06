const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config');
const port = process.env.PORT || 3000

const app = express()
app.set('view engine', 'hbs')

// anytime any endpoint is hit, bodyParser runs, converting requestbody into json
app.use(bodyParser.json())
// exporting route from items
const itemsRoute = require('./routes/items')
// launching function in items endpoint when called
app.use('/items',itemsRoute)

// home endpoint renders index html
app.get('/', (req, res) => {
	res.render('index')
})

// getting connected with MongoDB
// it works for every imported endpoint
mongoose.set('useUnifiedTopology', true)
mongoose.set('useNewUrlParser', true)
mongoose.connect(process.env.DB_CONNECTION, function(err, db) {
  console.log('Connected to db.')
})

// making server to listen
app.listen(port)
