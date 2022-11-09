'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const parkingController = require('./controllers/ParkingController');
const { PREFIX } = require('./config');
const app = express();

app.use(bodyParser.json());
app.get(PREFIX + '/parking', parkingController.getAll);
app.delete(PREFIX + '/parking/:id', parkingController.deleteParking);
app.put(PREFIX + '/parking/:id', parkingController.updateParking);
app.post(PREFIX + '/parking', parkingController.addParking);

module.exports = app;
