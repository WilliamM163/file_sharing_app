const pool = require('../database/db');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Checking DB
        const user = await pool.query(
            'SELECT * FROM users WHERE email = $1', [email]
        );
        if (user.rows.length === 0) {
            res.status(401).send({ title: 'User doesn\'t exists' });
        } else if (await bcrypt.compare(password, user.rows[0].password)) {
            res.status(200).send({ title: 'Success' });
        } else {
            res.status(401).send({ title: 'Incorrect Password' });
        }
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send({ title: 'Internal Server Error' });
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
        res.send({ title: 'Successfully Created User' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send({ title: 'Internal Server Error' });
    }
}