const {User} = require('../models/userModel');
const bcrypt = require('bcrypt');

const {
  InvalidRequestError,
} = require('../utils/errors');

const viewProfile = async (userId) => {
  const user = await User.findById({_id: userId}, '-password -__v -deleted');
  return user;
};

const updateProfile = async (userId, username, email, age) => {
  const user = await User.findOne({_id: userId});

  const existingEmail = await User.findOne({_id: {$ne: userId}, email});
  if(existingEmail){
    throw new InvalidRequestError('Sorry this email is already in use');
  }
  const updatedUser = await User.updateOne({_id: userId},
    {$set: {username, email, age}});
  return updatedUser;
};


module.exports = {
  viewProfile,
  updateProfile,
};
