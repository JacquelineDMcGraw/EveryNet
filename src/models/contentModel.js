// contentModel.js
const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    contentType: {
        type: String,
        required: true
    },
    contentHash: {
        type: String,
        required: true,
        unique: true
    },
    contentSize: Number,
    encryption: {
        publicKey: String,
        encryptedDataKey: String
    },
    contentAccessList: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    metadata: mongoose.Schema.Types.Mixed,
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Content', ContentSchema);
