const { mailTransporter } = require('./mailTransporter');
const { getMenteeEmail, getMentorEmail } = require('./emailTemplate');

const sendMenteeMail = (menteeName, menteeEmail) => {
  const mailOptions = {
    from: 'JWoC 2k22',
    to: menteeEmail,
    subject: 'Welcome to JWOC | Successfully Registered as Mentee',
    html: getMenteeEmail(menteeName),
  };

  mailTransporter.sendMail(mailOptions, (error, data) => {
    if (error) console.log(error);
  });
};

const sendMentorMail = (mentorEmail, mentorName, projectName, githubLink) => {
  const mailOptions = {
    from: 'JWoC 2k22',
    to: mentorEmail,
    subject: 'Welcome to JWOC | Successfully Registered as Mentor',
    html: getMentorEmail(mentorName, projectName, githubLink),
  };

  mailTransporter.sendMail(mailOptions, (error, data) => {
    if (error) console.log(error);
  });
};

module.exports = { sendMenteeMail, sendMentorMail };
