const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  phonenumber: String
});

module.exports = mongoose.model('Users', UserSchema);
