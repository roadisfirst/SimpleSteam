const express = require('express');
const router = new express.Router();

const {
  getGames,
  getGamesByUserLibraryArray,
} = require('../services/gamesService');

const {
  getLibraryArrayByUserId,
} = require('../services/usersService');

const {
  InvalidRequestError,
} = require('../utils/errors');

const {
  asyncWrapper,
} = require('../utils/apiUtils');

router.get('/', asyncWrapper(async (req, res) => {
  const {userId} = req.user;
  const games = await getGames(userId);
  if (!games) {
    throw new InvalidRequestError();
  }

  res.json(games);
}));

router.get('/library', asyncWrapper(async (req, res) => {
  const {userId} = req.user;
  const gameArr = await getLibraryArrayByUserId(userId);
  const gamesLibrary = await getGamesByUserLibraryArray(gameArr);
  if (!gamesLibrary) {
    throw new InvalidRequestError();
  }
  res.json(gamesLibrary);
}));

module.exports = {
  gamesRouter: router,
};