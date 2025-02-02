const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const authenticate = require('../middleware/authenticate');

router.post('/login', userController.login);
router.post('/register', userController.register);
router.post('/validate', authenticate, userController.validate);

module.exports = router;