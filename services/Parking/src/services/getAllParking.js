'use strict';

const db = require('../db')

const getAllParking = async () => {
    return db.select().table('parking');
};

module.exports = getAllParking;
