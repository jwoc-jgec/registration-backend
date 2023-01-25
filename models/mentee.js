const mongoose = require('mongoose');
const {
  requiredBool,
  requiredString,
  requiredNumber,
  requiredMap,
} = require('../utils/SchemaTypes');
const { MenteeQuestions } = require('../utils/Questions');

const menteeSchema = mongoose.Schema(
  {
    name: requiredString,
    gender: {type: String, default: 'Prefer not to say'},
    email: requiredString,
    phone: requiredString,
    whatsapp: requiredString,
    ipAddress: { type: String },
    ipDetails: { type: Map, of: String },
    college: requiredString,
    year: requiredNumber,
    github: requiredString,
    linkedIn: requiredString,
    isFirstTime: requiredBool,
    question1: { type: String, default: MenteeQuestions.question1 },
    answer1: requiredString,
    isBanned: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

const Mentee = mongoose.model('Mentee', menteeSchema);

module.exports = Mentee;
