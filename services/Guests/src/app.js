'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const guestsController = require('./controllers/GuestsController');
const { PREFIX } = require('./config');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.get(PREFIX + '/guests', guestsController.getAll);
app.delete(PREFIX + '/guests/:id', guestsController.deleteGuest);
app.patch(PREFIX + '/guests/:id', guestsController.updateGuest);
app.post(PREFIX + '/guests', guestsController.addGuest);

module.exports = app;
