const {User} = require('../models/userModel');

const getAllUsers = async (userId) => {
  const users = await User.find({_id: {$ne: userId}}, '-password -__v -deleted -created_date');
  return users;
}

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

const getFriendsArrayByUserId = async (userId) => {
  const user = await User.findOne({_id: userId, deleted: false});
  return user.friends;
};

const addFriend = async (userId, newFriendId) => {
  const userFriends = await getFriendsArrayByUserId(userId);
  if(!userFriends.includes(newFriendId)){
    userFriends.push(newFriendId);
    await User.updateOne({_id: userId}, {$set: {friends: userFriends}});
  }
}

const makeFriendship = async (user1Id, user2Id) => {
  await addFriend(user1Id, user2Id);
  await addFriend(user2Id, user1Id);
};

const removeFriend = async (userId, notFriendId) => {
  const userFriends = await getFriendsArrayByUserId(userId);
  if(userFriends.includes(notFriendId)){
    const index = userFriends.indexOf(notFriendId);
    userFriends.splice(index, 1);
    await User.updateOne({_id: userId}, {$set: {friends: userFriends}});
  }
}

const removeFriendship = async (user1Id, user2Id) => {
  await removeFriend(user1Id, user2Id);
  await removeFriend(user2Id, user1Id);
};

const getUsersByUsersArray = async (usersIds) => {
  const usersList = await User.find({ '_id': { $in: usersIds }},
      '-__v -deleted -created_date -password');
  return usersList;
};

module.exports = {
  getAllUsers,
  getLibraryArrayByUserId,
  addGameByIdToUserLibrary,
  removeGameByIdFromUserLibrary,
  makeFriendship,
  removeFriendship,
  getFriendsArrayByUserId,
  getUsersByUsersArray,
};