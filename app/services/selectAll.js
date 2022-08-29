const { Model } = require("../model");

const selectAll = function () {
    return Model.find({});
}

module.exports = selectAll;
