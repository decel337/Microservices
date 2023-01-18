'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const staffController = require('./controllers/StaffController');
const { PREFIX } = require('./config');
const app = express();
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json());
app.get(PREFIX + '/staff', staffController.getAll);
app.get(PREFIX + '/staff/:id', staffController.getOne);
app.delete(PREFIX + '/staff/:id', staffController.deleteStaff);
app.patch(PREFIX + '/staff/:id', staffController.updateStaff);
app.post(PREFIX + '/staff', staffController.addStaff);

module.exports = app;
