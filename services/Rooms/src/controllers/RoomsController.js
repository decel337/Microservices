'use strict';

const getRoom = require('../services/getRoom');
const getAllRooms = require('../services/getAllRooms');
const deleteRooms = require('../services/deleteRooms');
const addRooms = require('../services/addRooms');
const updateRooms = require('../services/updateRooms');

const axios = require('axios');

class RoomsController {
    async getOne(req, res) {
        try {
            const { id } = req.params;
            const [room] = await getRoom(id);
            if (room) {
                res.json(room);
            } else {
                res.status(404).json({ error: 'Room not found' });
            }
        } catch (err) {
            return res.status(400).send();
        }
    }

    async getAll(req, res) {
        try {
            const rooms = await getAllRooms();
            return res.status(200).json(rooms);
        } catch (err) {
            return res.status(400).send();
        }
    }

    async addRoom(req, res) {
        try {
            const {floor, number, guestId} = req.body;

            try {
                await axios.get(`http://local-guests/api/v1/guests/${guestId}`);
            } catch (err) {
                if (err.response.status === 404) {
                    return res.status(404).json({ error: 'Guest not found' });
                }
                return res.status(err.response.status).send({ error: 'Guest service unavailable' });
            }

            const room = await addRooms(floor, number, guestId);
            res.status(200).json(room);
        } catch (err) {
            res.status(400).send(err);
        }
    }

    async deleteRoom(req, res) {
        try {
            const { id } = req.params;
            const [room] = await getRoom(id);
            if (room) {
                const deleted = await deleteRooms(id);
                if (deleted) {
                    res.json({ message: 'Successfully deleted room' });
                }
            } else {
                res.status(404).json({ error: 'Room not found' });
            }
        } catch (err) {
            res.status(400).send();
        }
    }

    async updateRoom(req, res) {
        try {
            const {id} = req.params
            const [room] = await getRoom(id);
            if (room) {
                const { floor, number, guestId } = req.body;

                try {
                    await axios.get(`http://local-guests/api/v1/guests/${guestId}`);
                } catch (err) {
                    if (err.response.status === 404) {
                        return res.status(404).json({ error: 'Guest not found' });
                    }
                    return res.status(err.response.status).send({ error: 'Guest service unavailable' });
                }

                const room = await updateRooms(id, floor, number, guestId);
                res.status(200).json(room);
            } else {
                res.status(404).json({ error: 'Room not found' });
            }
        } catch (err) {
            res.status(400).send(err);
        }
    }
}

module.exports = new RoomsController();
