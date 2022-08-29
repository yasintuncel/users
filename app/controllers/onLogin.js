const httpStatus = require("http-status");
const { decryptPassword, generateAccessToken, generateRefreshToken } = require("../helpers");
const { selectByEmail } = require("../services");

function onLogin(req, res) {
    selectByEmail(req.body.email)
        .then((user) => {
            if (!user)
                return res.status(httpStatus.NOT_FOUND).send({ message: 'Not found.' });

            if (decryptPassword(user.passwordHash, req.body.password)) {
                return res.status(httpStatus.OK).send({
                    ...user.toObject(),
                    tokens: {
                        accessToken: generateAccessToken(user),
                        refreshToken: generateRefreshToken(user),
                    }
                });
            }
            else
                return res.status(httpStatus.FORBIDDEN).send({ message: 'Wrong password.' });
        })
        .catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e));
}

module.exports = onLogin;