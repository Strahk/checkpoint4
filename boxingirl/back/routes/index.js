const express = require('express');

const router = express.Router();

const clubs = require('./club');
const managers = require('./manager');

router.use('/clubs', clubs);
router.use('/managers', managers);

module.exports = router;