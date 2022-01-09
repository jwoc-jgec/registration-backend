const mongoose = require('mongoose');
const { requiredString, requiredNumber, requiredMap } = require('../utils/SchemaTypes');
const { MentorQuestions } = require('../utils/Questions');

const mentorSchema = mongoose.Schema(
  {
    name: requiredString,
    email: requiredString,
    phone: requiredString,
    whatsapp: requiredString,
    IPdetails: requiredMap,
    college: requiredString,
    year: requiredNumber,
    github: requiredString,
    linkedIn: requiredString,
    projectName: requiredString,
    projectLink: requiredString,
    projectDescription: requiredString,
    question1: { type: String, default: MentorQuestions.question1 },
    answer1: requiredString,
    question2: { type: String, default: MentorQuestions.question2 },
    answer2: requiredString,
  },
  {
    timestamps: true,
  },
);

const Mentor = mongoose.model('Mentor', mentorSchema);

module.exports = Mentor;
