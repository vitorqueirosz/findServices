import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import knex from '../database/connection';
import authConfig from '../config/auth';
import bcrypt from 'bcryptjs';

class SessionsController {

    async store(req: Request, res: Response) {

        const { email, password } = req.body;

        const user = await knex('users').where('email', email).first();

        if(!user) {
            return res.status(401).json({ error: 'User not found.'});
        };
        
        const isValidPassword = await bcrypt.compare(password, user.hashPassword);

        if(!isValidPassword) {
            return res.status(401).json({ error: 'Password does not match'});
        };




        const { id, name } = user;

        return res.json({
        users :{
            id,
            name,
            email,

        },
        token: jwt.sign({ id }, authConfig.secret, {
            expiresIn: authConfig.expiresIn
        }),
        
    })
  }
};

export default SessionsController;
