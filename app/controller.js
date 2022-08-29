const httpStatus = require("http-status");
const encryptPassword = require('./helpers/encryptPassword');
const { selectAll, selectOne, insert, update, remove } = require("./service");

function onGet(req, res) {
    selectAll()
        .then(response =>
            res.status(httpStatus.OK).send(response)
        )
        .catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e));
}

function onGetId(req, res) {
    selectOne(req.params.id)
        .then(response =>
            res.status(httpStatus.OK).send(response)
        )
        .catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e));
}

function onPost(req, res) {
    const password = req.body.password;
    const passwordHash = encryptPassword(password);
    req.body.passwordHash = passwordHash;
    delete req.body.password;

    insert(req.body)
        .then(response =>
            res.status(httpStatus.OK).send(response)
        )
        .catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e));
}

function onPatch(req, res) {
    update(req.params.id, req.body)
        .then(response =>
            res.status(httpStatus.OK).send(response)
        )
        .catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e));
}

function onDelete(req, res) {
    remove(req.params.id)
        .then(response =>
            res.status(httpStatus.OK).send(response)
        )
        .catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e));
}


module.exports = {
    onGet,
    onGetId,
    onPost,
    onPatch,
    onDelete
};