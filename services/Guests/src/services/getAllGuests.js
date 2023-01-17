'use strict';

const db = require('../db');

const getAllGuests = async () => {
    return db.select().table('guests');
};

module.exports = getAllGuests;
