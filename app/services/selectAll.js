const { Model } = require("../database/model");

const selectAll = function () {
    return Model.find({});
}

module.exports = selectAll;
