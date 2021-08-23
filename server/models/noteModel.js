const mongoose = require('mongoose');

const Note = mongoose.model('Note', {
  text: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },

  createdDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = {Note};
