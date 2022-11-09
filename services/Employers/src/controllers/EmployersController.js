'use strict';

const getAllEmployers = require('../services/getAllEmployers');
const deleteEmployers = require('../services/deleteEmployers');
const addEmployers = require('../services/addEmployers');
const updateEmployers = require('../services/updateEmployers');

class EmployersController {
    async getAll(req, res) {
        try {
            const employers = await getAllEmployers();
            return res.status(200).json(employers);
        } catch (err) {
            return res.status(400).send();
        }
    }

    async addEmployer(req, res) {
        try {
            const {name, post} = req.body;

            const employerSlot = await addEmployers(name, post);
            res.status(200).json(employerSlot);
        } catch (err) {
            res.status(400).send();
        }
    }

    async deleteEmployer(req, res) {
        try {
            const {id} = req.params
            const employers = await deleteEmployers(id);
            res.status(200).json(employers);
        } catch (err) {
            res.status(400).send();
        }
    }

    async updateEmployer(req, res) {
        try {
            const {id} = req.params
            const {name, post} = req.body;

            const employerSlot = await updateEmployers(id, name, post);
            res.status(200).json(employerSlot);
        } catch (err) {
            res.status(400).send();
        }
    }
}

module.exports = new EmployersController();
