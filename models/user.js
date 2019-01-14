const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user_id: String,
  user_password: String,
  user_name: String,
  user_age: Number,
  user_git_id: String,
});

module.exports = mongoose.model('user', userSchema);