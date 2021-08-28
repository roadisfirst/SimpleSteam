const {Game} = require('../models/gameModel');

const getGames = async (userId) => {
  const games = await Game.find({}, '-__v ');
  return games;
};

const getGameById = async (gameId) => {
  const game = await Game.findOne({_id: gameId}, '-__v ');
  return game;
};

const getGamesByUserLibraryArray = async (libraryIds) => {
  const gamesFromLibrary = await Game.find({ '_id': { $in: libraryIds } },
      '-__v');
  return gamesFromLibrary;
};

module.exports = {
  getGames,
  getGameById,
  getGamesByUserLibraryArray,
};