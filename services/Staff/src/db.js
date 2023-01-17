const knex = require('knex')({
    client: 'pg',
    connection: `postgres://${process.env.POSTGRES_USER || 'demo'}:${process.env.POSTGRES_PASSWORD || 'demo'}@${process.env.POSTGRES_HOST || 'postgres'}:5432/${process.env.POSTGRES_DB || 'demo'}`,
    searchPath: ['knex', 'public']
});

module.exports = knex;