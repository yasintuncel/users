const { Model } = require("../database/model");

const remove = function (id) {
    return Model.findByIdAndDelete(id);
}

module.exports = remove;