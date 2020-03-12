const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const textSchema = new Schema({
  levelName: { type: String },
  lessonName: { type: String },
  english: { type: String },
  russian: { type: String }
});

module.exports = mongoose.model('texts', textSchema);
