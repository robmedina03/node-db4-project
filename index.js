const express = require('express')
const db = require('./data/db')

const app = express()
const PORT = process.env.PORT || 5000

app.get('/api/recipes/:id', async (req, res) => {
    try{
        const recipe = await db.getRecipeById(req.params.id)
        if(recipe){
            res.json(recipe)
        }else{
            res.status(404).json({message:'recipe ot found'})
        }
    }catch(err){
        res.status(500).json({message:'Error retriving the recipe', error: err.message})
    }
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})