import {Request, Response} from 'express';
import knex from '../database/connection';


class TypesController {

    async index(req: Request, res: Response) {
        const { types, actuation, uf, city, services} = req.query;

        const parsedServices = String(services)
        .split(',').map((item) => Number(item.trim()));

        console.log(parsedServices)

        const typesServices = await knex('typeServices')
        .join('types_services', 'typeServices.id', '=', 'types_services.type_service_id')
        .whereIn('types_services.services_id', parsedServices)
        .where('types', String(types))
        .where('actuation', String(actuation))
        .where('city', String(city))
        .where('uf', String(uf))
        .distinct()
        .select('typeServices.*');


        const serializedTypeServices = typesServices.map(types => {
            return {
                ...types,
                image_url: `http://192.168.0.100:3333/uploads/${types.image}`
            }
        })

        return res.json(serializedTypeServices)
    };


    async show(req: Request, res: Response) {
        const { id } = req.params;

        const TypeService = await knex('typeServices').where('id', id).first();

        if(!TypeService) {
            return res.json({ error: 'That Service type no exists'});
        };

        const serializedTypeServices = {
                ...TypeService,
                image_url: `http://192.168.0.100:3333/uploads/${TypeService.image}`
            
        };

        const services = await knex('services').join('types_services', 'services.id', '=', 'types_services.services_id')
        .where('types_services.type_service_id', id).select('services.id', 'services.title', 'services.image');

        return res.json({ type: serializedTypeServices, services});
    };

    async create(req: Request, res: Response) {
        const { 
            name,
            types, 
            actuation, 
            email, 
            whatsapp,
            longitude,
            latitude,
            city,
            uf,
            services,

        } = req.body;


        const trx = await knex.transaction();

        const typeService = {
            image: req.file.filename,
            name,
            types, 
            actuation, 
            email, 
            whatsapp,
            longitude,
            latitude,
            city,
            uf,
        };
        
        const insertedIds = await trx('typeServices').insert(typeService);

        const type_service_id = insertedIds[0];

        const type_services = services
        .split(',')
        .map((item: string )=> Number(item.trim()))
        .map((services_id: number) => ({
            services_id,
            type_service_id,
        }))
        
        await trx('types_services').insert(type_services);
        
        await trx.commit();
        
        return res.json({
            id: type_service_id,
            ...typeService
        });
    };
}


export default TypesController;