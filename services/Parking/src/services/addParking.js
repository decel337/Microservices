const db = require('../db');

const addParking = async (make, model, license, guestId) => {
    const inserted = await db('parking')
        .insert({ make, model, license, guest_id: guestId })
        .returning(['id', 'make', 'model', 'license', 'guest_id']);
    return inserted[0];
};

module.exports = addParking;
