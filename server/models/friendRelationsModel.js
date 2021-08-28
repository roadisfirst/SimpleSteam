const mongoose = require('mongoose');

const FriendRelations = mongoose.model('FriendRelations', {
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  recieverId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  status: {
    type: String,
    enum: ['PENDING', 'ACCEPTED', 'REJECTED'],
    required: true,
  },
});

module.exports = {FriendRelations};