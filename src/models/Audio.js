const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const audioSchema = new Schema({
  levelName: { type: String },
  audioName: { type: String },
  src: { type: String }
});

module.exports = mongoose.model('audios', audioSchema);
