const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth');

router.get('/', controller.getAll);
router.post('/login', controller.login);
router.post('/register', controller.register);
router.patch('/:id', controller.update);

module.exports = router;
