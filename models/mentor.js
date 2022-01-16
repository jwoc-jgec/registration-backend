const mongoose = require('mongoose');
const { requiredString, requiredNumber, requiredMap } = require('../utils/SchemaTypes');
const { MentorQuestions } = require('../utils/Questions');

const mentorSchema = mongoose.Schema(
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
    projectName: requiredString,
    projectLink: requiredString,
    projectTags: { type: [String], required: true },
    projectDescription: requiredString,
    question1: { type: String, default: MentorQuestions.question1 },
    answer1: requiredString,
    question2: { type: String, default: MentorQuestions.question2 },
    answer2: requiredString,
    isSelected: { type: Boolean, default: false },
    isBanned: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

const Mentor = mongoose.model('Mentor', mentorSchema);

module.exports = Mentor;
