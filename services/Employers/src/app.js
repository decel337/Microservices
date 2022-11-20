'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const employersController = require('./controllers/EmployersController');
const { PREFIX } = require('./config');
const app = express();
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json());
app.get(PREFIX + '/employers', employersController.getAll);
app.delete(PREFIX + '/employers/:id', employersController.deleteEmployer);
app.put(PREFIX + '/employers/:id', employersController.updateEmployer);
app.post(PREFIX + '/employers', employersController.addEmployer);

module.exports = app;
