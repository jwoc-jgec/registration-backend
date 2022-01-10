const Mentee = require('../models/mentee');
const { Response } = require('../utils/Response');

const addMentee = async (req, res) => {
  const deatils = req.body;

  try {
    let existingMentee;
    existingMentee = await Mentee.findOne({ ipAddress: deatils.ipAddress });
    if (!existingMentee) existingMentee = await Mentee.findOne({ email: deatils.email });
    if (existingMentee)
      return res.status(409).json(Response({ isSuccess: false, message: 'Mentee already exists' }));
    const newMentee = await Mentee.create(deatils);
    return res
      .status(200)
      .json(Response({ isSuccess: true, message: 'New Mentee has been added', data: newMentee }));
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
