const Test = require('../models/Test');

module.exports.getAll = async (req, res) => {
  try {
    const test = await Test.find();
    res.status(200).json(test);
  } catch (e) {
    console.log(e);
  }
};
