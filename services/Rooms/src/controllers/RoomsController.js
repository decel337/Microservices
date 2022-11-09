'use strict';

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
            const {level, busy} = req.body;

            const room = await addRooms(level, busy);
            res.status(200).json(room);
        } catch (err) {
            res.status(400).send();
        }
    }

    async deleteRoom(req, res) {
        try {
            const {id} = req.params
            const room = await deleteRooms(id);
            res.status(200).json(room);
        } catch (err) {
            res.status(400).send();
        }
    }

    async updateRoom(req, res) {
        try {
            const {id} = req.params
            const {level, busy} = req.body;

            const room = await updateRooms(id, level, busy);
            res.status(200).json(room);
        } catch (err) {
            res.status(400).send();
        }
    }
}

module.exports = new RoomsController();
