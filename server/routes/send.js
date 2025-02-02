const express = require('express');
const router = express.Router();

const authenticate = require('../middleware/authenticate');
const sendController = require('../controllers/send');

router.post('/file', authenticate, sendController.sendFile);

module.exports = router;