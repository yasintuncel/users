const httpStatus = require("http-status");
const service = require("../services");

function onDelete(req, res) {
    service.remove(req.params.id)
        .then(response =>
            res.status(httpStatus.OK).send(response)
        )
        .catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e));
}

module.exports = onDelete;