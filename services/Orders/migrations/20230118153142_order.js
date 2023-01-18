/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('orders', table => {
            table.increments('id').primary();
            table.string('item', 255).notNullable();
            table.integer('quantity').notNullable();
            table.float('price').notNullable();
            table.integer('guest_id').notNullable();
            table.integer('staff_id').notNullable();
        });
};

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function(knex) {
    return knex.schema.dropTable('orders');
};
