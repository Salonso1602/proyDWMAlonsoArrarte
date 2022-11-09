if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const init = require('./init');

const app = express();

app.use(init.setResponseAllowanceHeaders);

app.use(helmet());
app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());

module.exports = app;