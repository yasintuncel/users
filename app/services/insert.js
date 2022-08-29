const { Model } = require("../model");

const insert = function (data) {
    const model = Model(data);
    return model.save();
}

module.exports = insert;
