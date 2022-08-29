const httpStatus = require("http-status");
const service = require("../services");

function onPost(req, res) {
    const password = req.body.password;
    const passwordHash = encryptPassword(password);
    req.body.passwordHash = passwordHash;
    delete req.body.password;

    service.insert(req.body)
        .then(response =>
            res.status(httpStatus.OK).send(response)
        )
        .catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e));
}

module.exports = onPost;