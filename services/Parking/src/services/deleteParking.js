const db = require('../db');

const deleteParking = async (id) => {
    return db('parking')
        .where('id', id)
        .del();
};

module.exports = deleteParking;
