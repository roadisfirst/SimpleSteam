const {Game} = require('../models/gameModel');

// const {
//   InvalidRequestError,
// } = require('../utils/errors');

const getGames = async (userId) => {
  const games = await Game.find({deleted: false}, '-__v ');
  return games;
};

// const getGamesByUserId = async (userId) => {
//   const games = await Game.find({created_by, deleted: false},
//       '-__v -deleted');
//   return games;
// };

module.exports = {
  getGames,
  // getGamesByUserId,
};