require('dotenv').config();
const jwt = require('jsonwebtoken');

const { ACCESS_TOKEN_SECRET } = process.env;

const authenticate = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const email = jwt.verify(authHeader, ACCESS_TOKEN_SECRET);
        console.log(email);
    } catch (error) {
        console.error('ERROR: ', error);
    }

    next();
}

module.exports = authenticate;