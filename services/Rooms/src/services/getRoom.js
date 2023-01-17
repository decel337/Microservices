'use strict';

const db = require('../db');

const getRoom = async id => {
    return db.select().table('rooms').where('id', id);
};

module.exports = getRoom;
