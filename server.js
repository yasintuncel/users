const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const router = require('./app/router');
const { connectDB } = require('./app/database/connector');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/users', router);
app.options('*', cors());

app.listen(process.env.PORT);