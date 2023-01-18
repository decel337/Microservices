'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const parkingController = require('./controllers/ParkingController');
const { PREFIX } = require('./config');
const app = express();
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json());
app.get(PREFIX + '/parking', parkingController.getAll);
app.get(PREFIX + '/parking/:id', parkingController.getOne);
app.delete(PREFIX + '/parking/:id', parkingController.deleteParking);
app.patch(PREFIX + '/parking/:id', parkingController.updateParking);
app.post(PREFIX + '/parking', parkingController.addParking);

module.exports = app;
