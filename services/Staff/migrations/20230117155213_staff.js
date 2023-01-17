/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('staff', table => {
           table.increments('id').primary();
           table.string('name', 255).notNullable();
           table.enu('title', ['Manager', 'Cleaning', 'Valet', 'Cook']);
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function(knex) {
  return knex.schema.dropTable('staff');
};
