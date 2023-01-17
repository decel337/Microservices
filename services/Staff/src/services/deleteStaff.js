const db = require('../db');

const deleteStaff = async (id) => {
    return db('staff')
        .where('id', id)
        .del();
};

module.exports = deleteStaff;
