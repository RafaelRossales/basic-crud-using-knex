const knex = require('../db')
//User controller
module.exports = {
    async index(req,res){

        const results = await knex('users');
        return res.json(results)
    },
    async create(req,res,next){
        //request: get the passed params 
        try{
            const { username } = req.body;
            await  knex ('users').insert({
                username
            })

            return res.status(201).send()

        }catch(error)
        {
            next(error)
        }
    }
}