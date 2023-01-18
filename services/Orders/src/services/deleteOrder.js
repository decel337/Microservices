const db = require('../db');

const deleteOrder = async (id) => {
    return db('orders')
        .where('id', id)
        .del();
};

module.exports = deleteOrder;
