const { pool } = require("./db");

const addEmployers = async (name, post) => {
    try {
        const res = await pool.query(
            "INSERT INTO employer (name, color) VALUES ($1, $2)",
            [name, post]
        );
        return {
            name: name,
            post: post};
    } catch (error) {
        return error
    }
};

module.exports = addEmployers;
