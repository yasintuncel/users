const JWT = require('jsonwebtoken');

const tokenDuration = '1w';

const generateAccessToken = function (user) {
    return JWT.sign({ user: user }, process.env.ACCESS_TOKEN_SECRET_KEY, { expiresIn: tokenDuration });
}

module.exports = generateAccessToken;