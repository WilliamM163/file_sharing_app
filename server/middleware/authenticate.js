require('dotenv').config();
const jwt = require('jsonwebtoken');

const { ACCESS_TOKEN_SECRET } = process.env;

const authenticate = async (req, res, next) => {
    // console.log(req.headers);
    try {
        const token = req.headers['authorization'];

        if (!token) {
            return res.status(401).send({ error: 'Authorization header missing' });
        }

        const decodedToken = jwt.verify(token, ACCESS_TOKEN_SECRET);
        req.user = { email: decodedToken.email };

        next();
    } catch (error) {
        console.error('ERROR: ', error.message);
        return res.status(401).send({error: error.message});
    }
}

module.exports = authenticate;