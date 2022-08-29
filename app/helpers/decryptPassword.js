const crypto = require('crypto');

const decryptPassword = function (passwordHash, password) {
    const decryptedHash = passwordHash.split('$');
    const salt = decryptedHash[0];
    const hashedPassword =
        crypto.createHmac('sha512', salt)
            .update(password)
            .digest("base64");

    return hashedPassword === decryptedHash[1];
};

module.exports = decryptPassword;