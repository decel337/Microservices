const db = require('../db');

const updateParking = async (id, make, model, license, guestId) => {
    return db('parking')
        .where('id', id)
        .update(
            { make, model, license, guest_id: guestId },
            ['id', 'make', 'model', 'license', 'guest_id']
        );
};

module.exports = updateParking;
