const express = require('express');
const router = express.Router();

const { getMentor, getMentors, addMentor } = require('../controllers/mentor');

router.get('/', getMentors);
router.get('/:email', getMentor);
router.post('/', addMentor);

module.exports = router;
