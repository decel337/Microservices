'use strict';

const getAllOrders = require('../services/getAllOrders');
const deleteOrder = require('../services/deleteOrder');
const addOrder = require('../services/addOrder');
const updateOrder = require('../services/updateOrder');
const getOrder = require('../services/getOrder');

const axios = require('axios');

class OrdersController {
    async getOne(req, res) {
        try {
            const { id } = req.params
            const [order] = await getOrder(id);
            if (order) {
                res.json(order);
            } else {
                res.status(404).json({ error: 'Order not found' })
            }
        } catch (err) {
            return res.status(400).send();
        }
    }

    async getAll(req, res) {
        try {
            const orders = await getAllOrders();
            return res.status(200).json(orders);
        } catch (err) {
            return res.status(400).send();
        }
    }

    async addOrder(req, res) {
        try {
            const { item, quantity, price, guestId, staffId } = req.body;

            try {
                await axios.get(`http://local-guests/api/v1/guests/${guestId}`);
            } catch (err) {
                if (err.response.status === 404) {
                    return res.status(404).json({ error: 'Guest not found' });
                }
                return res.status(err.response.status).send(err.response.body);
            }

            try {
                await axios.get(`http://local-staff/api/v1/staff/${staffId}`);
            } catch (err) {
                if (err.response.status === 404) {
                    return res.status(404).json({ error: 'Staff not found' });
                }
                return res.status(err.response.status).send(err.response.body);
            }

            const order = await addOrder(item, quantity, price, guestId, staffId);
            res.status(200).json(order);
        } catch (err) {
            res.status(400).send(err);
        }
    }

    async deleteOrder(req, res) {
        try {
            const { id } = req.params
            const [order] = await getOrder(id);
            if (order) {
                const deleted = await deleteOrder(order.id);
                if (deleted) {
                    res.json({ message: 'Successfully deleted order' });
                }
            } else {
                res.status(404).json({ error: 'Order not found' })
            }
        } catch (err) {
            res.status(400).send();
        }
    }

    async updateOrder(req, res) {
        try {
            const { id } = req.params
            const [order] = await getOrder(id);
            if (order) {
                const { item, quantity, price, guestId, staffId } = req.body;

                try {
                    await axios.get(`http://local-guests/api/v1/guests/${guestId}`);
                } catch (err) {
                    if (err.response.status === 404) {
                        return res.status(404).json({ error: 'Guest not found' });
                    }
                    return res.status(err.response.status).send({ error: 'Guest service unavailable' });
                }

                try {
                    await axios.get(`http://local-staff/api/v1/staff/${staffId}`);
                } catch (err) {
                    if (err.response.status === 404) {
                        return res.status(404).json({ error: 'Staff not found' });
                    }
                    return res.status(err.response.status).send({ error: 'Staff service unavailable' });
                }

                const [order] = await updateOrder(id, item, quantity, price, guestId, staffId);
                res.status(200).json(order);
            } else {
                res.status(404).json({ error: 'Order not found' })
            }
        } catch (err) {
            res.status(400).send(err);
        }
    }
}

module.exports = new OrdersController();
