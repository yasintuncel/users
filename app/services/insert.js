const { Model } = require("../database/model");

const insert = function (data) {
    const model = Model(data);
    return model.save();
}

module.exports = insert;
