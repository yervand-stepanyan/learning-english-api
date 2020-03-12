const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema({
  testName: { type: String },
  question: { type: String },
  answer1: { type: String },
  answer2: { type: String },
  answer3: { type: String },
  answer4: { type: String },
  answer5: { type: String },
  correctAnswer: { type: String }
});

module.exports = mongoose.model('tests', testSchema);
