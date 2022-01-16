const express = require('express');
const router = express.Router();

const { getMentees, getMentee, addMentee } = require('../controllers/mentee');
const { isAdmin } = require('../middleware/admin');

router.get('/', isAdmin, getMentees);
router.get('/:email', isAdmin, getMentee);
router.post('/', addMentee);

module.exports = router;
