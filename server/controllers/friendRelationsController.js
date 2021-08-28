const express = require('express');
const router = new express.Router();

const {
  sendInvite,
  cancelInviteBySender,
  updateInviteStatusByReciever,
  getSentInvitesByUserId,
  getRecievedInvitesByUserId,
} = require('../services/friendRelationsService');

const {
  makeFriendship
} = require('../services/usersService');

const {
  InvalidRequestError,
} = require('../utils/errors');

const {
  asyncWrapper,
} = require('../utils/apiUtils');

router.post('/sendInvite', asyncWrapper(async (req, res) => {
  const {userId} = req.user;
  const {
    recieverUserId,
  } = req.body;

  await sendInvite(userId, recieverUserId);

  res.json({message: 'Friend invite was sent'});
}));

router.delete('/cancelInvite/:recieverId', asyncWrapper(async (req, res) => {
  const {userId} = req.user;
  const {recieverId} = req.params;

  const cancelledInvite = await cancelInviteBySender(userId, recieverId);
  if (!cancelledInvite) {
    throw new InvalidRequestError();
  }

  res.json({message: 'Friend invite was cancelled'});
}));

router.patch('/answerInvite', asyncWrapper(async (req, res) => {
  const {userId} = req.user;
  const {
    status,
  } = req.body;

  const updatedInvite = await updateInviteStatusByReciever(userId, status);
  if (!updatedInvite) {
    throw new InvalidRequestError();
  }
  if(updatedInvite && status === 'ACCEPTED'){
    await makeFriendship(updatedInvite.senderId, updatedInvite.recieverId);
  }

  res.json({message: `Friend invite status was updated to ${status}`});
}));

router.get('/getSentInvitesRecieverIdsArr', asyncWrapper(async (req, res) => {
  const {userId} = req.user;
  const sentInvites = await getSentInvitesByUserId(userId);
  if (!sentInvites) {
    throw new InvalidRequestError();
  }
  const recieverIdsArr = sentInvites.map(invite => invite.recieverId);
  res.json(recieverIdsArr);
}));

router.get('/getRecievedInvitesSenderIdsArr', asyncWrapper(async (req, res) => {
  const {userId} = req.user;
  const recievedInvites = await getRecievedInvitesByUserId(userId);
  if (!recievedInvites) {
    throw new InvalidRequestError();
  }
  const senderIdsArr = recievedInvites.map(invite => invite.senderId);
  res.json(senderIdsArr);
}));


module.exports = {
  friendRelationsRouter: router,
};