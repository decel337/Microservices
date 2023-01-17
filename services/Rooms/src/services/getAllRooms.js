'use strict';

const db = require('../db');

const getAllRooms = async () => {
    return db.select().table('rooms');
};

module.exports = getAllRooms;
