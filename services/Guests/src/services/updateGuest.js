const db = require('../db');

const updateGuest = async (id, firstName, lastName, email, phoneNumber) => {
    return db('guests')
        .where('id', id)
        .update(
            { firstName, lastName, email, phoneNumber },
            ['id', 'firstName', 'lastName', 'email', 'phoneNumber']
        );
};

module.exports = updateGuest;
