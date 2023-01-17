'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const roomsController = require('./controllers/RoomsController');
const { PREFIX } = require('./config');
const app = express();
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json());
app.get(PREFIX + '/rooms', roomsController.getAll);
app.delete(PREFIX + '/rooms/:id', roomsController.deleteRoom);
app.patch(PREFIX + '/rooms/:id', roomsController.updateRoom);
app.post(PREFIX + '/rooms', roomsController.addRoom);

module.exports = app;
