const db = require('../db');

const deleteGuest = async (id) => {
    return db('guests')
        .where('id', id)
        .del();
};

module.exports = deleteGuest;
