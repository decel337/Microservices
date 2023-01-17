const db = require('../db');

const updateStaff = async (id, name, title) => {
    return db('staff')
        .where('id', id)
        .update(
            { name, title },
            ['id', 'name', 'title']
        );
};

module.exports = updateStaff;
