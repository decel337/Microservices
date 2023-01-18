const db = require('../db');

const updateRooms = async (id, floor, number, guestId) => {
    return db('rooms')
        .where('id', id)
        .update(
            { floor, number, guest_id: guestId },
            ['id', 'floor', 'number', 'guest_id']
        );
};

module.exports = updateRooms;
