const express = require('express');
const router = new express.Router();

const {
  getGames,
} = require('../services/gamesService');

const {
  InvalidRequestError,
} = require('../utils/errors');

const {
  asyncWrapper,
} = require('../utils/apiUtils');

router.post('/register', registrationValidator,
    asyncWrapper(async (req, res) => {
      const {
        email,
        password,
      } = req.body;

      await registration({email, password});

      res.json({message: 'Profile created successfully'});
    }));
    
// router.get('/', asyncWrapper(async (req, res) => {
//   const {userId} = req.user;
//   console.log('here')
//   const games = await getGames(userId);
//   if (!games) {
//     throw new InvalidRequestError();
//   }

  res.json({games});
}));

module.exports = {
  gamesRouter: router,
};