const { Client } = require("knex");

module.exports ={
    development : {
        Client:'sqlite',
        connection: {
            filename:'./data/recipes.db3'
        },
        useNullDefault:true,
        migrations: {
            directory: './data/migrations'
        },
        seeds: {
            directory: './data/seeds'
        }
    }
}