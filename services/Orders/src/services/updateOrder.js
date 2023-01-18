const db = require('../db');

const updateOrder = async (id, item, quantity, price, guestId, staffId) => {
    return db('orders')
        .where('id', id)
        .update(
            { item, quantity, price, guest_id: guestId, staff_id: staffId },
            ['id', 'item', 'quantity', 'price', 'guest_id', 'staff_id']
        );
};

module.exports = updateOrder;
