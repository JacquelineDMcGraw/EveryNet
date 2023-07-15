// userModel.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: String,
    alias: {
        type: String,
        unique: true
    },
    publicKey: String,
    encryptedPrivateKey: String,
    reputationScore: {
        type: Number,
        default: 0
    },
    warnings: [{
        type: {
            type: String,
            enum: ['warning_type1', 'warning_type2'], // specify warning types
            required: true
        },
        message: String,
        date: {
            type: Date,
            default: Date.now
        },
    }],
    nodeParticipationLevel: {
        type: Number,
        default: 0
    },
    contentHashBlacklist: [String],
    reportedContent: [mongoose.Schema.Types.ObjectId],
    geoLocation: {
        lat: Number,
        long: Number
    },
    dataUsage: {
        type: Number,
        default: 0
    },
    deviceInfo: {
        deviceType: String, // e.g., Mobile, Desktop, IoT Device etc.
        deviceName: String, // e.g., iPhone 12, Dell Laptop etc.
        OS: String // e.g., iOS, Windows, Linux etc.
    },
    networkLatency: Number,
    connectedNodes: [mongoose.Schema.Types.ObjectId],
    dateJoined: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

module.exports = mongoose.model('User', UserSchema);
