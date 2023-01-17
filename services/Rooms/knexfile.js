// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: process.env.POSTGRES_HOST || 'postgres',
      database: process.env.POSTGRES_DB || 'demo',
      user:     process.env.POSTGRES_USER || 'demo',
      password: process.env.POSTGRES_PASSWORD || 'demo'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'rooms_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: process.env.POSTGRES_HOST || 'postgres',
      database: process.env.POSTGRES_DB || 'demo',
      user:     process.env.POSTGRES_USER || 'demo',
      password: process.env.POSTGRES_PASSWORD || 'demo'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'rooms_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: process.env.POSTGRES_HOST || 'postgres',
      database: process.env.POSTGRES_DB || 'demo',
      user:     process.env.POSTGRES_USER || 'demo',
      password: process.env.POSTGRES_PASSWORD || 'demo'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'rooms_migrations'
    }
  }

};
