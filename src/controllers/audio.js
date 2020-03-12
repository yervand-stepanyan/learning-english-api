const Audio = require('../models/Audio');

module.exports.getAll = async (req, res) => {
  try {
    const audio = await Audio.find();
    res.status(200).json(audio);
  } catch (e) {
    console.log(e);
  }
};
