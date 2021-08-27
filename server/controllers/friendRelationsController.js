const express = require('express');
const router = new express.Router();

const {
  sendInvite,
  cancelInviteBySender,
  updateInviteStatusByReciever,
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

router.delete('/cancelInvite', asyncWrapper(async (req, res) => {
  const {userId} = req.user;

  const cancelledInvite = await cancelInviteBySender(userId);
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
    await makeFriendship(updatedInvite.senderUser, updatedInvite.recieverUser);
  }

  res.json({message: `Friend invite status was updated to ${status}`});
}));


module.exports = {
  friendRelationsRouter: router,
};