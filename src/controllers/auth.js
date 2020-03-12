const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/variables.config');
const User = require('../models/User');

module.exports.login = async (req, res) => {
  const candidate = await User.findOne({ email: req.body.email });
  if (candidate) {
    const passwordResult = bcrypt.compareSync(
      req.body.password,
      candidate.password
    );
    if (passwordResult) {
      const token = jwt.sign(
        {
          email: candidate.email,
          userId: candidate.id
        },
        keys.jwt,
        { expiresIn: 60 * 60 }
      );
      res.status(200).json({
        token: `Barear ${token}`
      });
    } else {
      res.status(401).json({
        message: 'Incorrect password'
      });
    }
  } else {
    res.status(404).json({
      message: 'User is not registered'
    });
  }
};

module.exports.register = async (req, res) => {
  const candidate = await User.findOne({
    email: req.body.email
  });

  if (candidate) {
    res.status(409).json({
      message: 'Email is already registered'
    });
  } else {
    const salt = bcrypt.genSaltSync(10);
    const password = req.body.password;
    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(password, salt),
      testToComplete: req.body.testToComplete
    });
    try {
      await user.save();
      res.status(201).json(user);
    } catch (e) {
      console.log(e);
    }
  }
};

module.exports.getAll = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (e) {
    console.log(e);
  }
};

module.exports.update = async (req, res) => {
  try {
    const update = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      message: 'update'
    });
  } catch (e) {
    console.log(e);
  }
};
