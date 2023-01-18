'use strict';

const getAllParking = require('../services/getAllParking');
const getParking = require('../services/getParking');
const deleteParking = require('../services/deleteParking');
const addParking = require('../services/addParking');
const updateParking = require('../services/updateParking');

const axios = require('axios');

class ParkingController {
    async getAll(req, res) {
        try {
            const parkings = await getAllParking();
            return res.status(200).json(parkings);
        } catch (err) {
            return res.status(400).send();
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params;
            const [parking] = await getParking(id);
            if (parking) {
                res.json(parking);
            } else {
                res.status(404).json({ error: 'Parking not found' });
            }
        } catch (err) {
            return res.status(400).send();
        }
    }

    async addParking(req, res) {
        try {
            const { make, model, license, guestId } = req.body;

            try {
                await axios.get(`http://local-guests/api/v1/guests/${guestId}`);
            } catch (err) {
                if (err.response.status === 404) {
                    return res.status(404).json({ error: 'Guest not found' });
                }
                return res.status(err.response.status).send({ error: 'Guest service unavailable' });
            }

            const parking = await addParking(make, model, license, guestId);
            res.status(200).json(parking);
        } catch (err) {
            res.status(400).send();
        }
    }

    async deleteParking(req, res) {
        try {
            const { id } = req.params;
            const [parking] = await getParking(id);
            if (parking) {
                const deleted = await deleteParking(id);
                if (deleted) {
                    res.status(200).json({ message: 'Successfully deleted parking' });
                }
            } else {
                res.status(404).json({ error: 'Parking not found' });
            }
        } catch (err) {
            res.status(400).send();
        }
    }

    async updateParking(req, res) {
        try {
            const {id} = req.params
            const [parking] = await getParking(id);
            if (parking) {
                const { make, model, license, guestId } = req.body;

                try {
                    await axios.get(`http://local-guests/api/v1/guests/${guestId}`);
                } catch (err) {
                    if (err.response.status === 404) {
                        return res.status(404).json({ error: 'Guest not found' });
                    }
                    return res.status(err.response.status).send({ error: 'Guest service unavailable' });
                }

                const parking = await updateParking(id, make, model, license, guestId);
                res.status(200).json(parking);
            } else {
                res.status(404).json({ error: 'Parking not found' });
            }
        } catch (err) {
            res.status(400).send();
        }
    }
}

module.exports = new ParkingController();
