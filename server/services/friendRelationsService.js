const {FriendRelations} = require('../models/friendRelationsModel');

const sendInvite = async (senderUserId, recieverUserId) => {
  const friendInvite = new FriendRelations({senderId: senderUserId, recieverId: recieverUserId,
    status: 'PENDING'});
  await friendInvite.save();
}

const cancelInviteBySender = async (senderUserId, recieverUserId) => {
  const deletedInvite = await FriendRelations.findOneAndRemove({senderId: senderUserId, recieverId: recieverUserId, status: 'PENDING'});
  return deletedInvite;
}

const updateInviteStatusByReciever = async (senderUserId, recieverUserId, newStatus) => {
  const updatedInvite = await FriendRelations.findOneAndUpdate({senderId: senderUserId,
    recieverId: recieverUserId, status: 'PENDING'}, {$set: {status: newStatus}});
  return updatedInvite;
}

const getSentInvitesRecieverIdsArr = async (userId) => {
  const sentInvites = await FriendRelations.find({senderId: userId, status: 'PENDING'});
  return sentInvites.map(invite => invite.recieverId);
}

const getRecievedInvitesSenderIdsArr = async (userId) => {
  const recievedInvites = await FriendRelations.find({recieverId: userId, status: 'PENDING'});
  return recievedInvites.map(invite => invite.senderId);
}

module.exports = {
  sendInvite,
  cancelInviteBySender,
  updateInviteStatusByReciever,
  getSentInvitesRecieverIdsArr,
  getRecievedInvitesSenderIdsArr,
};