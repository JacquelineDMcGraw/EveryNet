// networkController.js
const Network = require('../src/models/networkModel');

exports.getAllNetworks = async (req, res) => {
    const networks = await Network.find();
    res.status(200).json(networks);
};

exports.getNetworkById = async (req, res) => {
    const network = await Network.findById(req.params.id);
    if (!network) return res.status(404).send({ message: 'Network not found' });
    res.status(200).json(network);
};

exports.createNetwork = async (req, res) => {
    const network = new Network(req.body);
    await network.save();
    res.status(201).json(network);
};

exports.updateNetwork = async (req, res) => {
    const updatedNetwork = await Network.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedNetwork);
};

exports.deleteNetwork = async (req, res) => {
    await Network.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Network deleted' });
};
