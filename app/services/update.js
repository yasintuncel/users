const { Model } = require("../model");

const update = function (id, data) {
    return Model.findByIdAndUpdate(id, data);
}

module.exports = update;
