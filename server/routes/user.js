const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');

const userController = require('../controllers/user');
const devicesController = require('../controllers/devices');
const friendsController = require('../controllers/friends');
const recentFilesController = require('../controllers/recent');

router.post('/login', userController.login);
router.post('/register', userController.register);

router.post('/validate', authenticate, userController.validate);
router.post('/devices', authenticate, devicesController.registerDevice);
router.get('/devices', authenticate, devicesController.getDevices);
router.get('/friends', authenticate, friendsController.getFriends);
router.get('/recent', authenticate, recentFilesController.recentFiles);

module.exports = router;