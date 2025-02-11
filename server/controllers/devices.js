const pool = require('../database/db');

exports.getDevices = async (req, res) => {
    const email = req.user.email;
    const results = await pool.query(`
        SELECT * FROM devices
        WHERE email = $1;`,
        [email]
    );
    res.send({ devices: results.rows});
}
exports.registerDevice = async (req, res) => {
    try {
        const email = req.user.email;
        const { deviceName, deviceType } = req.body;

        await pool.query(`
            INSERT INTO devices
            (email, name, type)
            VALUES
            ($1, $2, $3);`,
            [email, deviceName, deviceType]
        );
        const result = await pool.query(`
            SELECT * FROM devices
            WHERE name = $1;`,
            [deviceName]
        );
        console.log(result.rows);
        res.send({ db_entry: result.rows[0] });
    } catch (error) {
        console.error('Error registering device:', error);
        res.status(500).send({ error: error.detail });
    }
}