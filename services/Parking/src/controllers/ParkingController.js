'use strict';

const getAllParking = require('../services/getAllParking');
const deleteParking = require('../services/deleteParking');
const addParking = require('../services/addParking');
const updateParking = require('../services/updateParking');

class ParkingController {
    async getAll(req, res) {
        try {
            const parkings = await getAllParking();
            return res.status(200).json(parkings);
        } catch (err) {
            return res.status(400).send();
        }
    }

    async addParking(req, res) {
        try {
            const {name, owner} = req.body;

            const parking = await addParking(name, owner);
            res.status(200).json(parking);
        } catch (err) {
            res.status(400).send();
        }
    }

    async deleteParking(req, res) {
        try {
            const {id} = req.params
            const parking = await deleteParking(id);
            res.status(200).json(parking);
        } catch (err) {
            res.status(400).send();
        }
    }

    async updateParking(req, res) {
        try {
            const {id} = req.params
            const {name, owner} = req.body;

            const parking = await updateParking(id, name, owner);
            res.status(200).json(parking);
        } catch (err) {
            res.status(400).send();
        }
    }
}

module.exports = new ParkingController();
