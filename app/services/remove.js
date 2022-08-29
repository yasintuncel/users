const { Model } = require("../model");

const remove = function (id) {
    return Model.findByIdAndDelete(id);
}

module.exports = remove;