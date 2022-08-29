const httpStatus = require("http-status");
const { decryptPassword } = require("../helpers");
const { selectByEmail } = require("../services");

function onLogin(req, res) {
    selectByEmail(req.email)
        .then((response) => {
            if (!response)
                return res.status(httpStatus.NOT_FOUND).send({ message: 'Not found.' });
            if (decryptPassword(response.passwordHash, req.body.password))
                return res.status(httpStatus.OK).send(response);
            else
                return res.status(httpStatus.FORBIDDEN).send({ message: 'Wrong password.' });
        })
        .catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e));
}

module.exports = onLogin;