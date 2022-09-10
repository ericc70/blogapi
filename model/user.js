const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true,
        unique: true
    },
    rgpd: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    ipAt: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'noActif',
        enum: ['noactif', 'Actif', "Banned"]
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin']
    },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);