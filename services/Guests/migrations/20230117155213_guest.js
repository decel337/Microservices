/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('guests', table => {
           table.increments('id').primary();
           table.string('firstName', 255).notNullable();
           table.string('lastName', 255).notNullable();
           table.string('email', 255).notNullable();
           table.string('phoneNumber', 255).notNullable();
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function(knex) {
  return knex.schema.dropTable('guests');
};
