const knex = require('knex')
const config = require('../knexfile')
const db = knex(config.development)

const getRecipeById = async(recipe_id) => {
    const recipe = await db('recipes').where({id: recipe_id}).first()
    if(!recipe) return null;

    const steps = await db('steps').where({recipe_id}).orderBy('step_number');
    for(let step of steps) {
        step.ingredients = await db('step_ingredients')
        .join('ingredients', 'step_ingredients.ingredient_id', ingredients.id)
        .where({step_id:step_id})
        .select('ingredients.id as ingredient_id', 'ingredients.name as ingredient_name','step_ingredients.quantity')
    }
    return {
        recipe_id: recipe_id,
        recipe_name: recipe_name,
        created_at: recipe.created_at,
        steps
    }
}

module.exports= { getRecipeById};