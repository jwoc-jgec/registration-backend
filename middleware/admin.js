const dotenv = require('dotenv');
dotenv.config();

const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

const isAdmin = async (req, res, next) => {
  // Need to add admin username and password in the headers while making req
  // headers: {
  //     'username': 'admin_username'
  //      'password': 'admin_password'
  // }
  const HEADER_ADMIN_USERNAME = req.headers.username || '';
  const HEADER_ADMIN_PASSWORD = req.headers.password || '';

  if (HEADER_ADMIN_USERNAME === ADMIN_USERNAME && HEADER_ADMIN_PASSWORD === ADMIN_PASSWORD) {
    next();
  } else {
    return res.status(401).json({ message: 'Not authorized' });
  }
};

module.exports = { isAdmin };
