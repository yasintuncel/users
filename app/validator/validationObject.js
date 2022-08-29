const joi = require('joi');

const validationObject = joi.object({
    email: joi.string().required().email(),
    password: joi.string().required().min(6).max(15),
});

module.exports = validationObject;