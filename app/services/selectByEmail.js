const { Model } = require("../database/model");

const selectByEmail = function (email) {
    return Model.findOne({ email: email });
}

module.exports = selectByEmail;
