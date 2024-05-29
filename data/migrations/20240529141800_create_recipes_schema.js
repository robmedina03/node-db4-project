/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', table => {
        table.increments('id').primary();
        table.string('name').notNullable().unique()
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
    .createTable('steps', table => {
        table.increments('id').primary();
        table.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes').onDelete('CASCADE')
        table.integer('step_number').notNullable();
        table.string('instructions').notNullable();
    })
    .createTable('ingredients', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
    })

    .createTable('step_ingredients', table => {
        table.increments('id').primary();
        table.integer('step_id').unsigned().notNullable().references('id').inTable('steps').onDelete('CASCADE');
        table.integer('ingredient_id').unsigned.notNullable().references('id').inTable('ingredients').onDelete('CASCADE');
        table.float('quantity').notNullable
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
  
};
