const express = require('express');
const router = express.Router();

const authenticate = require('../middleware/authenticate');
const sendController = require('../controllers/send');

const { upload } = require('../middleware/multer');

router.post('/file', [authenticate, upload.array('file')], sendController.sendFile);

module.exports = router;