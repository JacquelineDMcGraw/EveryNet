// nodeModel.js
const mongoose = require('mongoose');

const NodeSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    reputationScore: {
        type: Number,
        default: 0
    },
    capacity: Number,
    usedCapacity: Number,
    nodeParticipationLevel: {
        type: Number,
        default: 0
    },
    geoLocation: {
        lat: Number,
        long: Number
    },
    connectedNodes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Node'
    }],
    storedContent: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Content'
    }],
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Node', NodeSchema);
