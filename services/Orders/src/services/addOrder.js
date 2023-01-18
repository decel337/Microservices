const db = require('../db');

const addOrder = async (item, quantity, price, guestId, staffId) => {
    const inserted = await db('orders')
        .insert({ item, quantity, price, guest_id: guestId, staff_id: staffId })
        .returning(['id', 'item', 'quantity', 'price', 'guest_id', 'staff_id']);
    return inserted[0];
};

module.exports = addOrder;
