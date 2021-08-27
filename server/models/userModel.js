const mongoose = require('mongoose');

const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
  },
  age: {
    type: Number,
  },
  games: [],
  friends: [],
  deleted: {
    type: Boolean,
    default: false,
  },

  created_date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = {User};
