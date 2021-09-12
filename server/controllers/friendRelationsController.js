const express = require('express');
const router = new express.Router();

const {
  sendInvite,
  cancelInviteBySender,
  updateInviteStatusByReciever,
  getSentInvitesRecieverIdsArr,
  getRecievedInvitesSenderIdsArr,
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
    senderId,
    status,
  } = req.body;

  const updatedInvite = await updateInviteStatusByReciever(senderId, userId, status);
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
  const recieverIdsArr = await getSentInvitesRecieverIdsArr(userId);
  if (!recieverIdsArr) {
    throw new InvalidRequestError();
  }
  res.json(recieverIdsArr);
}));

router.get('/getRecievedInvitesSenderIdsArr', asyncWrapper(async (req, res) => {
  const {userId} = req.user;
  const senderIdsArr = await getRecievedInvitesSenderIdsArr(userId);
  if (!senderIdsArr) {
    throw new InvalidRequestError();
  }
  res.json(senderIdsArr);
}));


module.exports = {
  friendRelationsRouter: router,
};