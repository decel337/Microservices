'use strict';
const { pool } = require("./db");

const getAllEmployers = async () => {
    try {
        const employers = await pool.query("SELECT * FROM employer");
        return employers.rows
    } catch (error) {
        return error
    }
};

module.exports = getAllEmployers;
