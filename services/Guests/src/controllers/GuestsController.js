'use strict';

const getAllGuests = require('../services/getAllGuests');
const deleteGuest = require('../services/deleteGuest');
const addGuest = require('../services/addGuest');
const updateGuest = require('../services/updateGuest');
const getGuest = require('../services/getGuest');

class GuestsController {
    async getAll(req, res) {
        try {
            const employers = await getAllGuests();
            return res.status(200).json(employers);
        } catch (err) {
            return res.status(400).send();
        }
    }

    async addGuest(req, res) {
        try {
            const { firstName, lastName, email, phoneNumber } = req.body;
            const guest = await addGuest(firstName, lastName, email, phoneNumber);
            res.status(200).json(guest);
        } catch (err) {
            res.status(400).send(err);
        }
    }

    async deleteGuest(req, res) {
        try {
            const { id } = req.params
            const [guest] = await getGuest(id);
            if (guest) {
                const deleted = await deleteGuest(guest.id);
                if (deleted) {
                    res.json({ message: 'Successfully deleted guest' });
                }
            } else {
                res.status(404).json({ error: 'Guest not found' })
            }
        } catch (err) {
            res.status(400).send();
        }
    }

    async updateGuest(req, res) {
        try {
            const { id } = req.params
            const [guest] = await getGuest(id);
            if (guest) {
                const { firstName, lastName, email, phoneNumber } = req.body;

                const [guest] = await updateGuest(id, firstName, lastName, email, phoneNumber);
                res.status(200).json(guest);
            } else {
                res.status(404).json({ error: 'Guest not found' })
            }
        } catch (err) {
            res.status(400).send(err);
        }
    }
}

module.exports = new GuestsController();
