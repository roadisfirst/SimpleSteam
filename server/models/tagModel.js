const mongoose = require('mongoose');

const Tag = mongoose.model('Tag', {
  name: {
    type: String,
    required: true,
  },
  games: [],

  createdDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = {Tag};