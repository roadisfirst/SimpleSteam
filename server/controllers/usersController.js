const express = require('express');
const router = new express.Router();

const {
  getLibraryArrayByUserId,
  addGameByIdToUserLibrary,
  removeGameByIdFromUserLibrary,
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

module.exports = {
  usersRouter: router,
};