const crypto = require('crypto');

const encryptPassword = function (password) {
    let salt = crypto.randomBytes(16).toString('base64');
    let hash = crypto.createHmac('sha512', salt)
        .update(password)
        .digest("base64");
    return salt + "$" + hash;
};

module.exports = encryptPassword;