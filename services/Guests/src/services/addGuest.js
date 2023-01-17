const db = require('../db');

const addGuest = async (firstName, lastName, email, phoneNumber) => {
    const inserted = await db('guests')
        .insert({
            firstName,
            lastName,
            email,
            phoneNumber
        })
        .returning(['id', 'firstName', 'lastName', 'email', 'phoneNumber']);
    return inserted[0];
};

module.exports = addGuest;
