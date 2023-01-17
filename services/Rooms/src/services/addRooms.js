const db = require('../db');

const addRooms = async (floor, number, guestId) => {
    const inserted = await db('rooms')
        .insert({ floor, number, guest_id: guestId })
        .returning(['id', 'floor', 'number', 'guest_id']);
    return inserted[0];
};

module.exports = addRooms;
