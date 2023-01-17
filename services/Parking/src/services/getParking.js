'use strict';

const db = require('../db')

const getParking = async id => {
    return db.select().table('parking').where('id', id);
};

module.exports = getParking;
