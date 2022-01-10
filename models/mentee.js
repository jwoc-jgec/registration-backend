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
    email: requiredString,
    phone: requiredString,
    whatsapp: requiredString,
    ipAddress: requiredString,
    ipDetails: requiredMap,
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
