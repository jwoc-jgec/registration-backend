const { mailTransporter } = require('./mailTransporter');
const { getMenteeEmail } = require('./emailTemplate');

const sendMenteeMail = (menteeName, menteeEmail) => {
  const mailOptions = {
    from: 'JWoC 2k22',
    to: menteeEmail,
    subject: 'Welcome to JWOC 2K22 | Successfully Registered as Mentee',
    html: getMenteeEmail(menteeName),
  };

  mailTransporter.sendMail(mailOptions, (error, data) => {
    if (error) console.log(error);
  });
};

module.exports = { sendMenteeMail };
