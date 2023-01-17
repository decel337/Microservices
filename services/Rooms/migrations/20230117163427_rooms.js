/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('rooms', table => {
            table.increments('id').primary();
            table.integer('floor').notNullable();
            table.integer('number').notNullable();
            table.integer('guest_id').notNullable();
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function(knex) {
    return knex.schema
        .dropTable('rooms')
};
