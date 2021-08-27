const {FriendRelations} = require('../models/friendRelationsModel');

const sendInvite = async (senderUserId, recieverUserId) => {
  const friendInvite = new FriendRelations({senderUser: senderUserId, recieverUser: recieverUserId,
    status: 'PENDING'});
  await friendInvite.save();
}

const cancelInviteBySender = async (senderUserId) => {
  const deletedInvite = await FriendRelations.findOneAndRemove({senderUser: senderUserId, status: 'PENDING'});
  return deletedInvite;
}

const updateInviteStatusByReciever = async (recieverUserId, newStatus) => {
  const updatedInvite = await FriendRelations.findOneAndUpdate({recieverUser: recieverUserId, status: 'PENDING'}, {$set: {status: newStatus}});
  return updatedInvite;
}

module.exports = {
  sendInvite,
  cancelInviteBySender,
  updateInviteStatusByReciever
};