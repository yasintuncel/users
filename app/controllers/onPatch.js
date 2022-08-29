const httpStatus = require("http-status");
const service = require("../services");

function onPatch(req, res) {
    service.update(req.params.id, req.body)
        .then(response =>
            res.status(httpStatus.OK).send(response)
        )
        .catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e));
}

module.exports = onPatch;