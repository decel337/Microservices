'use strict';

const db = require('../db');

const getStaff = async id => {
    return db.select().table('staff').where('id', id);
};

module.exports = getStaff;
