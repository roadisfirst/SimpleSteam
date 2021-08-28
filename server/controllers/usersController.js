const express = require('express');
const router = new express.Router();

const {
  getAllUsers,
  getLibraryArrayByUserId,
  addGameByIdToUserLibrary,
  removeGameByIdFromUserLibrary,
  removeFriendship,
  getFriendsArrayByUserId,
  getUsersByUsersArray,
} = require('../services/usersService');

const {
  getSentInvitesRecieverIdsArr,
  getRecievedInvitesSenderIdsArr
} = require('../services/friendRelationsService');

const {
  InvalidRequestError,
} = require('../utils/errors');

const {
  asyncWrapper,
} = require('../utils/apiUtils');

router.get('/library', asyncWrapper(async (req, res) => {
  const {userId} = req.user;
  const library = await getLibraryArrayByUserId(userId);

  res.json(library);
}));

router.patch('/library/add/:id', asyncWrapper(async (req, res) => {
  const {userId} = req.user;
  const {id} = req.params;
  await addGameByIdToUserLibrary(userId, id);

  res.json({message: 'Game added to your library'});
}));

router.patch('/library/remove/:id', asyncWrapper(async (req, res) => {
  const {userId} = req.user;
  const {id} = req.params;
  await removeGameByIdFromUserLibrary(userId, id);

  res.json({message: 'Game removed from your library'});
}));

router.get('/', asyncWrapper(async (req, res) => {
  const users = await getAllUsers();

  res.json(users);
}));

router.patch('/unfriend/:id', asyncWrapper(async (req, res) => {
  const {userId} = req.user;
  const {id} = req.params;

  await removeFriendship(userId, id);

  res.json({message: 'User was deleted from your friends'});
}));

router.get('/friends', asyncWrapper(async (req, res) => {
  const {userId} = req.user;
  const friendsArray = await getFriendsArrayByUserId(userId);
  const friends = await getUsersByUsersArray(friendsArray);
  if (!friends) {
    throw new InvalidRequestError();
  }
  res.json(friends);
}));

router.get('/friendsArray', asyncWrapper(async (req, res) => {
  const {userId} = req.user;
  const friendsArray = await getFriendsArrayByUserId(userId);
  res.json(friendsArray);
}));

router.get('/pendingInvitesUsers', asyncWrapper(async (req, res) => {
  const {userId} = req.user;
  const recieverIds = await getSentInvitesRecieverIdsArr(userId);
  const senderIds = await getRecievedInvitesSenderIdsArr(userId);
  const pendingInvitesUsers = await getUsersByUsersArray([...recieverIds, ...senderIds]);
  if (!pendingInvitesUsers) {
    throw new InvalidRequestError();
  }
  res.json(pendingInvitesUsers);
}));

module.exports = {
  usersRouter: router,
};