const express = require('express');
const cors = require('cors');

const config = require('./app/config');
const router = require('./app/router');

config();

const app = express();


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/users', router);
app.options('*', cors());

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(process.env.PORT);