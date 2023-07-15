// networkModel.js
const mongoose = require('mongoose');

const NetworkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    nodes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Node'
    }],
    contents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Content'
    }],
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Network', NetworkSchema);
