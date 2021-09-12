const express = require('express');
const router = new express.Router();

const {
  registration,
  logIn,
} = require('../services/authService');

const {
  asyncWrapper,
} = require('../utils/apiUtils');

const {
  registrationValidator,
  loginValidator,
} = require('../middlewares/validationMiddleware');

router.post('/register', registrationValidator,
    asyncWrapper(async (req, res) => {
      const {
        email,
        password,
      } = req.body;

      await registration({email, password});

      res.json({message: 'Profile created successfully'});
    }));

router.post('/login', loginValidator, asyncWrapper(async (req, res) => {
  const {
    email,
    password,
  } = req.body;

  const token = await logIn({email, password});
  res.json({
    email,
    jwt_token: token
  });
}));

module.exports = {
  authRouter: router,
};
