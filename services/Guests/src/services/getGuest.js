'use strict';

const db = require('../db');

const getGuest = async id => {
    return db.select().table('guests').where('id', id);
};

module.exports = getGuest;
