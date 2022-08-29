const httpStatus = require("http-status");
const service = require("../services");

function onGet(req, res) {
    service.selectAll()
        .then(response =>
            res.status(httpStatus.OK).send(response)
        )
        .catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e));
}

module.exports = onGet;