import { Request, Response } from 'express';
import knex from '../database/connection';
import bcrypt from 'bcryptjs';

class UsersControllers {

    async create(req: Request, res: Response) {

        const { name, idade, email, password, profissao, whatsapp } = req.body;

        const hashPassword = bcrypt.hashSync(password, 8);

       const user = {
            name, 
            idade, 
            email,
            password, 
            hashPassword, 
            profissao, 
            whatsapp,
       };

       const data = {
            name, 
            idade, 
            email,
            hashPassword, 
            profissao, 
            whatsapp,
       };

       const Emailexists = await knex('users').select('email').where('email', email).first();
       
       
       if(Emailexists) {
           const userExists = await knex('users').where('email', email).first();

           if(userExists) {
               return res.status(401).json({ error: 'User already exists'})
            }
        }
        
        const insertedId = await knex('users').insert(user);
        

        const id = insertedId[0];
        console.log(id)

        return res.json({
            id: id,
            ...data
        });
    };

    async show(req: Request, res: Response) {
        const { id } = req.params;

        const user = await knex('users').where('id', id).first();


        if(!user) {
            return res.status(401).json({ error: 'User not found!'});
        };

        const data = await knex('typeServices')
        .join('users_services', 'typeServices.id', '=', 'users_services.services_id')
        .where('users_services.users_id', id)
        .select('typeServices.*')

        const services = data.map(service => {
            return {
                ...service,
                image_url: `http://192.168.0.100:3333/uploads/${service.image}`
            }
        })
    
        return res.json({ user, services})
    };


};

export default UsersControllers;
