const db = require('../db');

const updateRooms = async (id, guestId) => {
    return db('rooms')
        .where('id', id)
        .update(
            { guest_id: guestId },
            ['id', 'floor', 'number', 'guest_id']
        );
};

module.exports = updateRooms;
