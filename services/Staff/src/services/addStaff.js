const db = require('../db');

const addStaff = async (name, title) => {
    const inserted = await db('staff')
        .insert({ name, title })
        .returning(['id', 'name', 'title'])
    return inserted[0];
};

module.exports = addStaff;
