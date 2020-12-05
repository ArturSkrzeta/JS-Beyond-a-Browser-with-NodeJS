# JS Beyond a Browser with NodeJS

## Routing e.g. items.js
### /items
### /items/specific
```
const express = require('express')
const router = express.Router()

// getting MongoClient and Database connection string
var MongoClient = require('mongodb').MongoClient;
require('dotenv/config');

// roter for /items endpoint
router.get('/', (req, res) => {

  res.send('list of items')

  // getting connected with MongoDB
  MongoClient.connect(process.env.DB_CONNECTION, {useNewUrlParser:true, useUnifiedTopology:true}, function(err, db) {

    // checking for errors
    if (err) throw err
    // getting db
    var dbo = db.db("company")
    // fetching all db items from products collection
    var cursor = dbo.collection('products').find()
    // pringint all items
    cursor.each(function(err,doc) {
      console.log(doc)
    })

  })

});

// availavle under endpoint /itemrs/specific
router.get('/specific', (req, res) => {
  res.send('Specific item.')
})

// exporting router
module.exports = router
```
