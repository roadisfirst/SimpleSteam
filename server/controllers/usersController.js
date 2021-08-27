const express = require('express');
const router = new express.Router();

const {
  getAllUsers,
  getLibraryArrayByUserId,
  addGameByIdToUserLibrary,
  removeGameByIdFromUserLibrary,
  removeFriendship,
} = require('../services/usersService');

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

module.exports = {
  usersRouter: router,
};