const Mentor = require('../models/mentor');
const Mentee = require('../models/mentee');
const { Response } = require('../utils/Response');

const addMentor = async (req, res) => {
  const deatils = req.body;

  try {
    let existingMentor;

    // Checking the IP Address in mentor's and mentee's collections
    existingMentor = await Mentor.findOne({ ipAddress: deatils.ipAddress });
    if (!existingMentor) existingMentor = await Mentee.findOne({ ipAddress: deatils.ipAddress });
    if (existingMentor)
      return res
        .status(409)
        .json(
          Response({ isSuccess: false, message: "Please don't spam and waste your internet :)" }),
        );

    // Checking if the email already exists in mentor's collection
    existingMentor = await Mentor.findOne({ email: deatils.email });
    if (existingMentor)
      return res
        .status(409)
        .json(Response({ isSuccess: false, message: 'Mentor already exists !' }));

    // Checking if the email already exists in mentee's collection
    const existingMentee = await Mentee.findOne({ email: deatils.email });
    if (existingMentee)
      return res
        .status(409)
        .json(Response({ isSuccess: false, message: 'You have already registered as a mentee !' }));

    // Creating a new mentor
    await Mentor.create(deatils);
    return res
      .status(200)
      .json(Response({ isSuccess: true, message: 'You have been registered successfully' }));
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(Response({ isSuccess: false, message: 'Something went wrong, please try again !' }));
  }
};

const getMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find();
    return res.status(200).json(
      Response({
        isSuccess: true,
        message: 'Data for all mentors has been fetched',
        data: mentors,
      }),
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json(Response({ isSuccess: false, message: 'Something went wrong' }));
  }
};

const getMentor = async (req, res) => {
  const { email } = req.params;
  try {
    const mentor = await Mentor.findOne({ email });
    return res.status(200).json(
      Response({
        isSuccess: true,
        message: 'Mentor data has been fetched',
        data: mentor,
      }),
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json(Response({ isSuccess: false, message: 'Something went wrong' }));
  }
};

module.exports = { getMentor, getMentors, addMentor };
