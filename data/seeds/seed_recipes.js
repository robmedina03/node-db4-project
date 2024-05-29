/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed =  function(knex) {
  // Deletes ALL existing entries
return knex('steps_ingredients').del()
.then(() => knex('ingredients').del())
.then(() => knex('steps').del())
.then(() => knex('recipes').del())
.then(() => {
  return knex('recipes').insert([
    {id:1, name: 'Spaghetti Bolognese', created_at:'2021-01-01 08:23:19.120'}

  ]);
})
.then(() => {
  return knex('ingredients').insert([{id: 27, name:'olive oil'}

  ])
})
.then(() => {
  return knex('step_ingredients').insert([{
    id:1,step_id:12, ingredient_id:27,quantity:0.014 }
  ])
})
};
