const Mentor = require('../models/mentor');
const Mentee = require('../models/mentee');
const { Response } = require('../utils/Response');

const { sendMenteeMail } = require('../utils/sendMail');

const addMentee = async (req, res) => {
  const deatils = req.body;

  try {
    let existingMentee;

    // Checking the IP Address in mentor's and mentee's collections
    existingMentee = await Mentee.findOne({ ipAddress: deatils.ipAddress });
    if (!existingMentee) existingMentee = await Mentor.findOne({ ipAddress: deatils.ipAddress });
    if (existingMentee)
      return res
        .status(409)
        .json(
          Response({ isSuccess: false, message: "Please don't spam and waste your internet :)" }),
        );

    // Checking if the email already exists in mentee's collection
    existingMentee = await Mentee.findOne({ email: deatils.email });
    if (existingMentee)
      return res
        .status(409)
        .json(Response({ isSuccess: false, message: 'Mentee already exists !' }));

    // Checking if the email already exists in mentor's collection
    const existingMentor = await Mentor.findOne({ email: deatils.email });
    if (existingMentor)
      return res
        .status(409)
        .json(Response({ isSuccess: false, message: 'You have already registered as a mentor !' }));

    // Creating a new mentee
    await Mentee.create(deatils);
    sendMenteeMail(deatils.name, deatils.email);

    return res
      .status(200)
      .json(Response({ isSuccess: true, message: 'You have been registered successfully' }));
  } catch (error) {
    console.log(error);
    return res.status(500).json(Response({ isSuccess: false, message: 'Something went wrong' }));
  }
};

const getMentees = async (req, res) => {
  try {
    const mentees = await Mentee.find();
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
