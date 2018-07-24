const express = require('express');
const {join} = require('path');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

const {apiRouter} = require('./api');
let router = require('./router/index.js');
let { mongoose_connect } = require('./config/auth.js');

const PORT = 3000;

mongoose.connect(mongoose_connect)
	.then(() => {console.log(`mongoose successfull connected`)})
  .catch(() => {console.log(`Could not connect to the database. Exiting now...'`)});

const SRC_PATH = join(process.cwd(), 'src');
const INDEX_PATH = join(SRC_PATH, 'index.html');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/router', router);
app.use('/api', apiRouter);

const sendError = (res, err) => {
  res.status(500).send('something wrong is happened!');
  console.log(err);
};

app.use('*.*', (req, res) => {
  res.sendFile(join(SRC_PATH, req.originalUrl), (err) => {
    if(!err) {
      return;
    }

    sendError(res, err);
  });
});

app.use('*', (req, res) => {
  res.sendFile(INDEX_PATH, (err, file) => {
    if(!err) {
      return;
    }

    sendError(res, err);
  });
});

app.listen(PORT, () => {
    console.log(`hasami is listening  on ${PORT}`)
});
