const express = require('express');
const router = new express.Router();

const {
  getGames,
  getGameById,
  getGamesByUserLibraryArray,
} = require('../services/gamesService');

const {
  getLibraryArrayByUserId,
} = require('../services/usersService');

const {
  getTags,
} = require('../services/tagsService');

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

router.get('/tags', asyncWrapper(async (req, res) => {
  const {userId} = req.user;
  const tags = await getTags(userId);
  if (!tags) {
    throw new InvalidRequestError();
  }
  res.json(tags);
}));

router.get('/about/:gameId', asyncWrapper(async (req, res) => {
  const {userId} = req.user;
  const {gameId} = req.params;
  const game = await getGameById(gameId);
  if (!game) {
    throw new InvalidRequestError();
  }
  res.json(game);
}));

module.exports = {
  gamesRouter: router,
};