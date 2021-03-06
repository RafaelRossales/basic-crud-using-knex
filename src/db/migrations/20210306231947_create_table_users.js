const { onUpdateTrigger } = require('../../../knexfile')
//Table creation
exports.up = knex => knex.schema.createTable('users',table => {
        table.increments('id')
        table.text('username').unique() //Contraint unique
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
        table.timestamp('deleted_at').defaultTo(knex.fn.now())
}).then(() => knex.raw(onUpdateTrigger('users')))

//Table delete (Roll back)
exports.down = knex => knex.schema.dropTable('users');
