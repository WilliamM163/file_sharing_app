require('dotenv').config();
const pool = require('../database/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { ACCESS_TOKEN_SECRET } = process.env;

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Checking DB
        const user = await pool.query(
            'SELECT * FROM users WHERE email = $1', [email]
        );

        // Checking email and passwords
        if (user.rows.length === 0) {
            return res.sendStatus(401);
        } else if (! await bcrypt.compare(password, user.rows[0].password)) {
            return res.sendStatus(401);
        }

        // Generating JWT and sending JWT
        const token = jwt.sign({ email }, ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
        res.send({ accessToken: token });

    } catch (error) {
        console.error('Error registering user:', error);
        res.sendStatus(500);
    }
}

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Checking if email is already registered
        const existingUsers = await pool.query(
            'SELECT * FROM users WHERE email = $1;', [email]
        );
        if (existingUsers.rows.length > 0) {
            return res.status(409).send({ title: 'Error: Email is already registered' });
        }

        // Hashing the password
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        // Adding User
        await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, hashedPassword]);
        res.sendStatus(200);
    } catch (error) {
        console.error('Error registering user:', error);
        res.sendStatus(200);
    }
}

exports.validate = (req, res) => {
    res.sendStatus(200);
}