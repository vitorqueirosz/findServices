import jwt, { decode } from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../config/auth';

import {Request, Response, NextFunction}  from 'express';


interface TokenPayload {
    id: string;
    iat: number;
    exp: number;
}

export default async (req: Request, res: Response, next: NextFunction ) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).json({ error: 'Token not provided'});
    };

    const token = authHeader.replace('Bearer', '').trim();

    try {
        const data = jwt.verify(token, authConfig.secret);

        const { id } = data as TokenPayload;

        req.userId = id;
       console.log(id)
        return next();

    } catch(err) {
        return res.status(401).json({ error: 'Token invalid'});
    }

};



