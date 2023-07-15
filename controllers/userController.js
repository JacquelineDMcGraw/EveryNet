// userController.js
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({ message: 'Server error' });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send({ message: 'User not found' });
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send({ message: 'Server error' });
  }
};

exports.registerUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({ ...req.body, password: hashedPassword });
    await newUser.save();
    res.status(201).send({ message: 'User created successfully', user: { ...newUser._doc, password: null } });
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).send({ message: 'Email already in use.' });
    } else {
      res.status(400).send({ message: 'Error creating user', error: err });
    }
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).send({ message: 'User not found' });
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send({ message: 'Error updating user', error: err });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send({ message: 'User not found' });
    res.status(200).send({ message: 'User deleted' });
  } catch (err) {
    res.status(500).send({ message: 'Server error' });
  }
};
