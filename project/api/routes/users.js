const express = require('express');
const router = express.Router();
const User = require('../models/User');

// getting all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch(err) {
    res.json({message: err})
  }
});


router.post('/', async (req, res) => {

  console.log(req.body) // req body parsed by BodyParser
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phonenumber: req.body.phonenumber
  });

  try {
    const savedUser = await user.save()
    res.json(savedUser); // sending response in json from
  } catch(err) {
    res.json({message: err}); // sending response in json from
  }

});

// e.g. http://localhost:3000/items/5fcbfe6003f0a962a8fdf9ec
// :itemId == req.params.itemId
router.get('/:userId', async (req, res) => {
  try{
    const user = await User.findById(req.params.userId)
    res.json(user)
  } catch(err) {
    res.json({message:err})
  }
});

router.delete('/:userId', async (req, res) => {

  console.log('user deleted')

  try{
    const removedUser = await User.remove({_id:req.params.userId})
    res.json(removedUser)
  } catch(err) {
    res.json({message:err})
  }
});

router.patch('/:userId', async (req, res) => {
    try{
      const updatedUser = await User.updateOne({_id:req.params.itemId}, {$set:{title: req.body.phonenumber}})
      res.json(updatedUser)
    } catch(err) {
      res.json({message:err})
    }
});

// exporting router to main.js
module.exports = router;
