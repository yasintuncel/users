const httpStatus = require("http-status");
const { selectOne } = require("../services");


function onGetId(req, res) {
    selectOne(req.params.id)
        .then(response =>
            res.status(httpStatus.OK).send(response)
        )
        .catch(e => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e));
}

module.exports = onGetId;