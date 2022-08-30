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

const {
    MONGODB_USER,
    MONGODB_PASSWORD,
    MONGODB_HOST,
    MONGODB_LOCAL_PORT,
    MONGODB_DATABASE,
} = process.env;

const start = async function () {
    console.log("Starting server... ");
    console.log(`mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}:${MONGODB_LOCAL_PORT}/${MONGODB_DATABASE}`);
    const dbStatus = await mongoConnector(`mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}:${MONGODB_LOCAL_PORT}/${MONGODB_DATABASE}`);
    console.log(dbStatus.message);

    if (dbStatus.isConnected) {
        app.listen(process.env.NODE_DOCKER_PORT);
    } else {
        console.log("Exiting now!");
        process.exit(1);
    }
};

start();