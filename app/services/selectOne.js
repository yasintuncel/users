const { Model } = require("../database/model");

const selectOne = function (id) {
    return Model.findById(id);
}

module.exports = selectOne;