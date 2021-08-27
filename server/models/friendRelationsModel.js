const mongoose = require('mongoose');

const FriendRelations = mongoose.model('FriendRelations', {
  senderUser: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  recieverUser: {
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