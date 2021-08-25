const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const {SteamApiError, InvalidPathError} = require('./server/utils/errors');

const port = process.env.PORT || 8080;
const {authRouter} = require('./server/controllers/authController');
const {profileRouter} = require('./server/controllers/profileController');
const {usersRouter} = require('./server/controllers/usersController');
const {gamesRouter} = require('./server/controllers/gamesController');
const {authMiddleware} = require('./server/middlewares/authMiddleware');

app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/client/dist/simple-steam')));

app.use('/api/auth', authRouter);
app.use('/api/users', [authMiddleware], usersRouter);
app.use('/api/users/profile', [authMiddleware], profileRouter);
app.use('/api/games', [authMiddleware], gamesRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/simple-steam/index.html'));
});

app.use((req, res, next) => {
  throw new InvalidPathError('Not found!!!');
});

app.use((err, req, res, next) => {
  if (err instanceof SteamApiError) {
    return res.status(err.status).json({message: err.message});
  }
  res.status(500).json({message: err.message});
});

const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://user1:useruser@cluster0.7t0pq.mongodb.net/steam?retryWrites=true&w=majority', {
      useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,
      useFindAndModify: false,
    });

    app.listen(port);
  } catch (err) {
    console.error(`Error on server startup: ${err.message}`);
  }
};

start();

