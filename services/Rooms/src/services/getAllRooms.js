'use strict';

const getAllRooms = async () => {
    const rooms = [
        {
            room_id: 12,
            level: 'Economy',
            busy: true
        },
        {
            room_id: 23,
            level: 'Medium',
            busy: true
        },
        {
            room_id: 13,
            level: 'Medium',
            busy: false
        },
    ];
    return rooms;
};

module.exports = getAllRooms;
