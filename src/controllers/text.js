const Text = require('../models/Text');

module.exports.getAll = async (req, res) => {
  try {
    const text = await Text.find();
    res.status(200).json(text);
  } catch (e) {
    console.log(e);
  }
};
