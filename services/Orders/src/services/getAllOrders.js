'use strict';

const db = require('../db');

const getAllOrders = async () => {
    return db.select().table('orders');
};

module.exports = getAllOrders;
