'use strict';

const getRoom = require('../services/getRoom');
const getAllRooms = require('../services/getAllRooms');
const deleteRooms = require('../services/deleteRooms');
const addRooms = require('../services/addRooms');
const updateRooms = require('../services/updateRooms');

class RoomsController {
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
                const { guestId } = req.body;

                const room = await updateRooms(id, guestId);
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
