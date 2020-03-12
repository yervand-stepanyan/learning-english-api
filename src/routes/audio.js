const express = require('express');
const router = express.Router();
const controller = require('../controllers/audio');

router.get('/', controller.getAll);

module.exports = router;
