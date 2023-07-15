// contentController.js
const Content = require('../src/models/contentModel');

exports.getAllContents = async (req, res) => {
    const contents = await Content.find();
    res.status(200).json(contents);
};

exports.getContentById = async (req, res) => {
    const content = await Content.findById(req.params.id);
    if (!content) return res.status(404).send({ message: 'Content not found' });
    res.status(200).json(content);
};

exports.createContent = async (req, res) => {
    const content = new Content(req.body);
    await content.save();
    res.status(201).json(content);
};

exports.updateContent = async (req, res) => {
    const updatedContent = await Content.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedContent);
};

exports.deleteContent = async (req, res) => {
    await Content.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Content deleted' });
};
