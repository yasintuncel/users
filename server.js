const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const router = require('./app/router');
const mongoConnector = require('./app/database/mongoConnector');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/users', router);
app.options('*', cors());


const start = async function () {
    console.log("Starting server... ");
    const dbStatus = await mongoConnector('mongodb://127.0.0.1:27017');
    console.log(dbStatus.message);

    if (dbStatus.isConnected) {
        app.listen(process.env.PORT);
    } else {
        console.log("Exiting now!");
        process.exit(1);
    }
};

start();