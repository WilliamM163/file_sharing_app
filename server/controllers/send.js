require('dotenv').config();
const pool = require('../database/db');

exports.sendFile = (req, res) => {
    const { user } = req.user;
    console.log(JSON.stringify(user));
    res.send();
}