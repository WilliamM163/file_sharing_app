'use strict';
const express = require('express');
const cors = require('cors');
const userController = require('./routes/user');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send({tile: 'Hello World!'});
});

app.use('/user', userController);


app.listen(port, () => {
    console.log(`File Sharing API | listening on http://localhost:${port}`);
})