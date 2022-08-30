const { Model } = require("../database/model");

const resetPassword = function (email, data) {
    return Model.findOneAndUpdate({ email: email }, data, { new: true });
}

module.exports = resetPassword;
