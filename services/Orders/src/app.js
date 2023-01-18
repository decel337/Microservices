'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const ordersController = require('./controllers/OrdersController');
const { PREFIX } = require('./config');
const app = express();
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json());
app.get(PREFIX + '/orders', ordersController.getAll);
app.get(PREFIX + '/orders/:id', ordersController.getOne);
app.delete(PREFIX + '/orders/:id', ordersController.deleteOrder);
app.patch(PREFIX + '/orders/:id', ordersController.updateOrder);
app.post(PREFIX + '/orders', ordersController.addOrder);

module.exports = app;
