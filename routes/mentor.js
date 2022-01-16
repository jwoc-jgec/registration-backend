const express = require('express');
const router = express.Router();

const { getMentor, getMentors, addMentor } = require('../controllers/mentor');
const { isAdmin } = require('../middleware/admin');

router.get('/', isAdmin, getMentors);
router.get('/:email', isAdmin, getMentor);
router.post('/', addMentor);

module.exports = router;
