import {Request, Response} from 'express';
import knex from '../database/connection';
import { string, number } from '@hapi/joi';


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
        
        const user_id = await knex('users').join('users_services', 'users.id', '=', 'users_services.users_id')
        .where('users_services.services_id', id).select('users_id');


        const serializedTypeServices = {
                user_id: user_id[0].users_id,
                ...TypeService,
                image_url: `http://192.168.0.100:3333/uploads/${TypeService.image}`
            
        };







        const services = await knex('services').join('types_services', 'services.id', '=', 'types_services.services_id')
        .where('types_services.type_service_id', id).select('services.id', 'services.title', 'services.image');

        return res.json({ ...serializedTypeServices, services});
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

        const users_id = await trx('users').select('id').where('email', email)
        .where('id', req.userId).first();
   
        if(!users_id) {
            return res.status(401).json({ error: 'Permission denied!'})
        }

        const type_service_id = insertedIds[0];
        

        const type_services = services
        .split(',')
        .map((item: string ) => Number(item.trim()))
        .map((services_id: number) => ({
            services_id,
            type_service_id,
        }));


    await trx('types_services').insert(type_services);
    await trx('users_services').insert([{ users_id: users_id.id, services_id: type_service_id }]);
    
        await trx.commit();
        
        return res.json({
            user_id: req.userId,
            id: type_service_id,
            ...typeService
        });
    };

    async update(req: Request, res: Response) {
        const { id } = req.params;
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

        const typeService = {
            name,
            types, 
            actuation, 
            email, 
            whatsapp,
            longitude,
            latitude,
            city,
            uf
        };

        const trx = await knex.transaction();

        const service = await trx('typeServices').where('id', id).first();

        if(email !== service.email) {
            const serviceExists = await trx('typeServices').where('email', email).first();

            if(serviceExists) {
                return res.status(401).json({ error: 'Service already exists'});
            }
        };

  
        const services_id = services
        // .split(',')
        // .map((item: string ) => Number(item.trim()))
        .map((services_id: number) => ({
            services_id,
        }));
        
        // const servicesID = [services_id].map((item: object) => ({
        //     id: item
        // }))
        console.log(services_id[0])
        const service_id = services_id[1].services_id

        console.log(service_id)
        // { services_id: 3, type_service_id: '30' }

        await trx('types_services').where('type_service_id', id)
        .update({type_service_id: id }, [services_id]);
       await trx('typeServices').where('id', id).update(typeService)

        await trx.commit();

        return res.json({
            ...typeService,
            services
        });
      };
    
      async delete(req: Request, res: Response) {
        const { id } = req.params;

        await knex('typeServices').where('id', id).first().del();
        await knex('types_services').where('type_service_id', id).first().del();

        return res.json({ message: 'Service deleted'});
      };
}


export default TypesController;
