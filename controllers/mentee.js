const Mentor = require('../models/mentor');
const Mentee = require('../models/mentee');
const { Response } = require('../utils/Response');

const { sendMenteeMail } = require('../utils/sendMail');

const addMentee = async (req, res) => {
  const details = req.body;

  try {
    let existingMentee;

    // Checking the IP Address in mentor's and mentee's collections
    existingMentee = await Mentee.findOne({ ipAddress: details.ipAddress });
    if (!existingMentee) existingMentee = await Mentor.findOne({ ipAddress: details.ipAddress });
    if (existingMentee)
      return res
        .status(409)
        .json(
          Response({ isSuccess: false, message: "We don't support multiple registrations :)" }),
        );

    // Checking if the email already exists in mentee's collection
    existingMentee = await Mentee.findOne({ email: details.email });
    if (existingMentee)
      return res
        .status(409)
        .json(Response({ isSuccess: false, message: 'You have already registered as a Mentee !' }));

    // Checking if the email already exists in mentor's collection
    const existingMentor = await Mentor.findOne({ email: details.email });
    if (existingMentor)
      return res
        .status(409)
        .json(Response({ isSuccess: false, message: 'You have already registered as a Mentor !' }));

    // Creating a new mentee
    await Mentee.create(details);
    sendMenteeMail(details.name, details.email);

    return res.status(200).json(
      Response({
        isSuccess: true,
        message: 'You have been registered successfully, please check your email(also spam)',
      }),
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json(Response({ isSuccess: false, message: 'Something went wrong' }));
  }
};

const getMentees = async (req, res) => {
  try {
    const mentees = await Mentee.find().sort({ _id: -1 });
    return res.status(200).json(
      Response({
        isSuccess: true,
        message: 'Data for all mentees has been fetched',
        data: mentees,
      }),
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json(Response({ isSuccess: false, message: 'Something went wrong' }));
  }
};

const getMentee = async (req, res) => {
  const { email } = req.params;
  try {
    const mentee = await Mentee.findOne({ email });
    return res.status(200).json(
      Response({
        isSuccess: true,
        message: 'Mentee data has been fetched',
        data: mentee,
      }),
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json(Response({ isSuccess: false, message: 'Something went wrong' }));
  }
};

module.exports = { getMentee, getMentees, addMentee };
