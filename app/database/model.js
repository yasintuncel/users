const mongoose = require("mongoose");

const ModelSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true }, // or email
    passwordHash: { type: String, required: true },
    role: { type: String, default: 'Model' },
    verificationCode: { type: String },
    token: { type: String }, // TODO will delete on PROD
    refreshToken: { type: String },
}, { timestamps: true, versionKey: false });

ModelSchema.methods.toJSON = function () {
    var obj = this.toObject(); //or var obj = this;
    delete obj.passwordHash;
    return obj;
}

const Model = mongoose.model('users', ModelSchema);

module.exports = { Model, ModelSchema };