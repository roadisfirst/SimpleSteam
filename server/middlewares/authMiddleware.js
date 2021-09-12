const jwt = require('jsonwebtoken');

const {
  InvalidCredentialsError,
} = require('../utils/errors');

const authMiddleware = (req, res, next) => {
  const {
    authorization,
  } = req.headers;

  if (!authorization) {
    throw new InvalidCredentialsError('Please, provide "authorization" header');
  }

  const [, token] = authorization.split(' ');

  if (!token) {
    throw new InvalidCredentialsError('Please, include token to request');
  }

  try {
    // should be changed for the deployment
    const devSecret = 'Simplesteam';
    const tokenPayload = jwt.verify(token, devSecret);
    req.user = {
      userId: tokenPayload._id,
      email: tokenPayload.email,
    };
    next();
  } catch (err) {
    throw new InvalidCredentialsError(err.message);
  }
};

module.exports = {
  authMiddleware,
};
