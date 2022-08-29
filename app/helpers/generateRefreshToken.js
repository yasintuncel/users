const JWT = require('jsonwebtoken');

const generateRefreshToken = function (user) {
    return JWT.sign({ user: user }, process.env.REFRESH_TOKEN_SECRET_KEY);
}

module.exports = generateRefreshToken;