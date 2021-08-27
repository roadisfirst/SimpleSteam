const {Tag} = require('../models/tagModel');

const getTags = async (userId) => {
  const games = await Tag.find({}, '-__v -createdDate');
  return games;
};

module.exports = {
  getTags,
};