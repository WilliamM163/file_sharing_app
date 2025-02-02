'use strict';
const express = require('express');
const cors = require('cors');

const userRoute = require('./routes/user');
const sendRoute = require('./routes/send');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send({tile: 'Hello World!'});
});


app.use('/user', userRoute);
app.use('/send', sendRoute);

app.listen(port, () => {
    console.log(`File Sharing API | listening on http://localhost:${port}`);
});