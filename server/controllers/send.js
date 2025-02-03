require('dotenv').config();
const pool = require('../database/db');

exports.sendFile = (req, res) => {
    console.log({
        // email: req.user.email,
        body: req.body,
        files: req.files
    });
    res.send({ message: 'Uploaded Successfully' });
}