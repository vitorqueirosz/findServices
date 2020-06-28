import {Request, Response} from 'express';
import knex from '../database/connection';

class ServicesControllers {
    async index(req: Request, res: Response) {
        const services = await knex('services').select('*');

        const serializedServices = services.map((item) => ({
            id: item.id,
            title: item.title,
            image_url: `http://192.168.0.100:3333/uploads/${item.image}`
        }))
    
    
        return res.json(serializedServices);
    }

}

export default ServicesControllers;