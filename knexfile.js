// Update with your config settings.

module.exports = {
  
  development: {
    client: 'mysql',
    version: '5.7',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database :'knex_test'
    },
    migrations:{
          tableName:'knex_migrations',
          directory:`${__dirname}/src/db/migrations`
      },
      seeds:{
        directory:`${__dirname}/src/db/seeds`
      }
  },

};

