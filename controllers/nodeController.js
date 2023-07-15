// nodeController.js
const Node = require('../src/models/nodeModel');

exports.getAllNodes = async (req, res) => {
    const nodes = await Node.find();
    res.status(200).json(nodes);
};

exports.getNodeById = async (req, res) => {
    const node = await Node.findById(req.params.id);
    if (!node) return res.status(404).send({ message: 'Node not found' });
    res.status(200).json(node);
};

exports.createNode = async (req, res) => {
    const node = new Node(req.body);
    await node.save();
    res.status(201).json(node);
};

exports.updateNode = async (req, res) => {
    const updatedNode = await Node.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedNode);
};

exports.deleteNode = async (req, res) => {
    await Node.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Node deleted' });
};
