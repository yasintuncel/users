const joi = require('joi');

const voResetPassword = joi.object({
    password: joi.string().required().min(6).max(15),
});

module.exports = voResetPassword;