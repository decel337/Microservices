'use strict';

const db = require('../db');

const getOrder = async id => {
    return db.select().table('orders').where('id', id);
};

module.exports = getOrder;
