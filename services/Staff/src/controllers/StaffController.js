'use strict';

const getAllStaff = require('../services/getAllStaff');
const deleteStaff = require('../services/deleteStaff');
const addStaff = require('../services/addStaff');
const updateStaff = require('../services/updateStaff');
const getStaff = require('../services/getStaff');

class StaffController {
    async getOne(req, res) {
        try {
            const { id } = req.params
            const [staff] = await getStaff(id);
            if (staff) {
                return res.json(staff);
            } else {
                res.status(404).json({ error: 'Staff not found' })
            }
        } catch (err) {
            return res.status(400).send();
        }
    }

    async getAll(req, res) {
        try {
            const employers = await getAllStaff();
            return res.status(200).json(employers);
        } catch (err) {
            return res.status(400).send();
        }
    }

    async addStaff(req, res) {
        try {
            const {name, title} = req.body;
            const employerSlot = await addStaff(name, title);
            res.status(200).json(employerSlot);
        } catch (err) {
            if (err.constraint === 'staff_title_check') {
                return res.status(400).send({ error: 'Invalid title. Must be one of the options: Manager, Cleaning, Valet, Cook' });
            }
            res.status(400).send(err);
        }
    }

    async deleteStaff(req, res) {
        try {
            const { id } = req.params
            const [staff] = await getStaff(id);
            if (staff) {
                const deleted = await deleteStaff(staff.id);
                if (deleted) {
                    res.json({ message: 'Successfully deleted staff' });
                }
            } else {
                res.status(404).json({ error: 'Staff not found' })
            }
        } catch (err) {
            res.status(400).send();
        }
    }

    async updateStaff(req, res) {
        try {
            const { id } = req.params
            const [staff] = await getStaff(id);
            if (staff) {
                const { name, title } = req.body;

                const [staff] = await updateStaff(id, name, title);
                res.status(200).json(staff);
            } else {
                res.status(404).json({ error: 'Staff not found' })
            }
        } catch (err) {
            if (err.constraint === 'staff_title_check') {
                return res.status(400).send({ error: 'Invalid title. Must be one of the options: Manager, Cleaning, Valet, Cook' });
            }
            res.status(400).send(err);
        }
    }
}

module.exports = new StaffController();
