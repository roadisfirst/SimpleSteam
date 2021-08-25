const {User} = require('../models/userModel');

const getLibraryArrayByUserId = async (userId) => {
  const user = await User.findOne({_id: userId, deleted: false});
  return user.games;
};

const addGameByIdToUserLibrary = async (userId, gameId) => {
  const updatedLibrary = await getLibraryArrayByUserId(userId);
  if (!updatedLibrary.includes(gameId)) {
    updatedLibrary.push(gameId);
    await User.updateOne({_id: userId},
      {$set: {games: updatedLibrary}});
  }
};

const removeGameByIdFromUserLibrary = async (userId, gameId) => {
  const updatedLibrary = await getLibraryArrayByUserId(userId);
  if (updatedLibrary.includes(gameId)) {
    const index = updatedLibrary.indexOf(gameId);
    updatedLibrary.splice(index, 1);
    await User.updateOne({_id: userId},
      {$set: {games: updatedLibrary}});
  }
};

module.exports = {
  getLibraryArrayByUserId,
  addGameByIdToUserLibrary,
  removeGameByIdFromUserLibrary,
};