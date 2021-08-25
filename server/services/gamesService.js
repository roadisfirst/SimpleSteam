const {Game} = require('../models/gameModel');

const getGames = async (userId) => {
  const games = await Game.find({}, '-__v ');
  return games;
};

const getGamesByUserLibraryArray = async (libraryIds) => {
  const gamesFromLibrary = await Game.find({ '_id': { $in: libraryIds } },
      '-__v');
  return gamesFromLibrary;
};

module.exports = {
  getGames,
  getGamesByUserLibraryArray,
};