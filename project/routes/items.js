const express = require('express')
const router = express.Router()
const Item = require('../models/Item')

// router for /items endpoint
router.get('/', async (req, res) => {
  // res.send('list of items')

  try {
    const items = await Item.find()
    res.json(items)
  } catch(err) {
    res.json({message: err})
  }

});

// availavle under endpoint /itemrs/specific
router.get('/specific', (req, res) => {
  res.send('Specific item.')
})

router.post('/', async (req, res) => {
  console.log(req.body)

  const item = new Item({
    title: req.body.title,
    price: req.body.price
  })

  // saving to mongodb
  // if collection items doesn't exist - it creates it
  // collection name = endpoint = items
  try {
    const savedItem = await item.save()
    res.json(savedItem)
  } catch(err) {
    res.json({message: err})
  }

})

// e.g. http://localhost:3000/items/5fcbfe6003f0a962a8fdf9ec
router.get('/:itemId', async (req, res) => {
  try{
    const item = await Item.findById(req.params.itemId)
    res.json(item)
  } catch(err) {
    res.json({message:err})
  }
})

router.delete('/:itemId', async (req, res) => {
    try{
      const removedItem = await Item.remove({_id:req.params.itemId})
      res.json(removedItem)
    } catch(err) {
      res.json({message:err})
    }
})

router.patch('/:itemId', async (req, res) => {
    try{
      const updatedItem = await Item.updateOne({_id:req.params.itemId}, {$set:{title: req.body.title}})
      res.json(updatedItem)
    } catch(err) {
      res.json({message:err})
    }
})

// exporting router
module.exports = router
