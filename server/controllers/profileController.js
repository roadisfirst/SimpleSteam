const express = require('express');
const router = new express.Router();
const path = require('path');

const {
  viewProfile,
  updateProfile,
} = require('../services/profileService');

const {
  InvalidRequestError,
} = require('../utils/errors');

const {
  asyncWrapper,
} = require('../utils/apiUtils');

router.get('/', asyncWrapper(async (req, res) => {
  const {userId} = req.user;

  const user = await viewProfile(userId);
  if (!user) {
    throw new InvalidRequestError();
  }

  res.json({user});
}));

router.put('/', asyncWrapper(async (req, res) => {
  const {userId} = req.user;
  const {username, email, age} = req.body;

  const updatedUser = await updateProfile(userId, username, email, age);

  if (!updatedUser) {
    throw new InvalidRequestError('Something went wrong');
  }

  res.json({message: 'Profile details changed successfully'});
}));


module.exports = {
  profileRouter: router,
};