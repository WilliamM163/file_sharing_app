require('dotenv').config();
const pool = require('../database/db');

exports.sendFile = async (req, res) => {
    for (let i = 0; i < req.files.length; i++) {
        const file = req.files[i];
        const { path, originalname, size } = file;
        const { email } = req.user;
        try {
            await pool.query(`
            INSERT INTO files
            (path, original_name, size, owner)
            VALUES ($1, $2, $3, $4)`,
                [path, originalname, size, email]
            );

            await pool.query(`
                INSERT INTO users_files
                (email, path)
                VALUES ($1, $2)`,
                [email, path]
            );
        } catch (error) {
            console.error('Error entering data: ', error);
        }
    }
    res.send({ message: 'Uploaded Successfully' });
}