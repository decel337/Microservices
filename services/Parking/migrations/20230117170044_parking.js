/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('parking', table => {
            table.increments('id').primary();
            table.string('make', 255).notNullable();
            table.string('model', 255).notNullable();
            table.string('license', 255).notNullable();
            table.integer('guest_id').notNullable();
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function(knex) {
  return knex.schema.dropTable('parking');
};
