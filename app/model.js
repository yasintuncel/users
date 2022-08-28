const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true }, // or email
    passwordHash: { type: String, required: true },
    role: { type: String, default: 'User' },
    token: { type: String }, // TODO will delete on PROD
}, { timestamps: true, versionKey: false });

const User = mongoose.model('users', UserSchema);

module.exports = { User, UserSchema };