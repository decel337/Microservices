'use strict';

const db = require('../db');

const getAllStaff = async () => {
    return db.select().table('staff');
};

module.exports = getAllStaff;
