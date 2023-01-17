const db = require('../db');

const deleteRooms = async (id) => {
    return db('rooms')
        .where('id', id)
        .del();
};

module.exports = deleteRooms;
