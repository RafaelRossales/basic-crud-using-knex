// const { query } = require('express');
// const { query } = require('express');
const knex = require('../db');

//User controller
module.exports = {
    async index(req,res,next){

        try{
            const {user_id, page = 1} = req.query;

            const query =  knex('projects')
            //Pagination
            .limit(5)
            .offset((page - 1) * 5 )

            if(user_id)
            {
                query
                .where({user_id})
                .join('users','user_id', '=','projects.user_id')
                .select('projects.*','users.username')
                .where('users.deleted_at',null)

                countObj
                .where({ user_id })
            }

            const [ count ] = await countObj

            res.header('x-Total-Count',count["count"])

            const results = await query

            return res.json(results)

        }catch(error)
        {
            next(error)
        }
    },

    async create(req,res,next){
        //request: get the passed params 
        try{
            const { title, user_id } = req.body;

            await  knex ('projects').insert({
                title,
                user_id
            })

            return res.status(201).send()

        }catch(error)
        {
            next(error)
        }
    },
    // async update(req,res,nex){

    //     try{
    //         const { username } = req.body;
    //         const { id } = req.params

    //         await knex('users')
    //             .update({username})
    //             .where({id})

    //         return res.send()
    //     }catch(error){

    //         next(error)
    //     }
    // },
    // async delete(req,res,next){

    //     try{
    //         const { id } = req.params;

    //         await knex('users')
    //         .where({id})
    //         .del();

    //         return res.send
    //     }catch(error){
    //         next(error)
    //     }
    // }
}