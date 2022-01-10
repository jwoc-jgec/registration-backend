const Mentor = require('../models/mentor');
const { Response } = require('../utils/Response');

const addMentor = async (req, res) => {
  const deatils = req.body;

  try {
    let existingMentor;
    existingMentor = await Mentor.findOne({ ipAddress: deatils.ipAddress });
    if (!existingMentor) existingMentor = await Mentor.findOne({ email: deatils.email });
    if (existingMentor)
      return res.status(409).json(Response({ isSuccess: false, message: 'Mentor already exists' }));
    const newMentor = await Mentor.create(deatils);
    return res
      .status(200)
      .json(Response({ isSuccess: true, message: 'New Mentor has been added', data: newMentor }));
  } catch (error) {
    console.log(error);
    return res.status(500).json(Response({ isSuccess: false, message: 'Something went wrong' }));
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
