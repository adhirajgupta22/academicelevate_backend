const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const formRoutes = require('./routes/form.routes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Home page');
});

app.use('/submit',formRoutes);


module.exports = app;