const { Model } = require("../model");

const selectOne = function (id) {
    return Model.findById(id);
}

module.exports = selectOne;