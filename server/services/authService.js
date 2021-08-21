const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {User} = require('../models/userModel');

const {
  InvalidRequestError,
} = require('../utils/errors');

const registration = async ({email, password}) => {
    const user = new User({
      email,
      password: await bcrypt.hash(password, 10),
    });
    await user.save();
};

const logIn = async ({email, password}) => {
  const user = await User.findOne({email});

  if (!user) {
    throw new InvalidRequestError('Invalid username or password');
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw new InvalidRequestError('Invalid username or password');
  }

  // should be changed for the deployment
  const devSecret = 'Simplesteam';

  const token = jwt.sign({
    _id: user._id,
    email: user.email,
  }, devSecret);
  return token;
};

module.exports = {
  registration,
  logIn,
};
