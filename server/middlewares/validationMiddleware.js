const Joi = require('joi');

const registrationValidator = async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
        .email()
        .required(),
    password: Joi.string()
        .min(6)
        .max(20)
        .required(),
  });

  try {
    await schema.validateAsync(req.body);
    next();
  } catch (err) {
    next(err);
  }
};

const loginValidator = async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
        .email()
        .required(),
    password: Joi.string()
        .required(),
  });

  try {
    await schema.validateAsync(req.body);
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  registrationValidator,
  loginValidator,
};
