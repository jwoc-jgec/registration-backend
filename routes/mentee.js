const express = require('express');
const router = express.Router();

const { getMentees, getMentee, addMentee } = require('../controllers/mentee');

router.get('/', getMentees);
router.get('/:email', getMentee);
router.post('/', addMentee);

module.exports = router;
