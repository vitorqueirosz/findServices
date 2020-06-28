import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
<<<<<<< HEAD
import path from 'path';
import { celebrate, Joi } from 'celebrate';

import authMiddleware from './middlewares/auth';

import TypesController from './controllers/TypesControllers';
import ServicesController from './controllers/ServicesControllers';
import UsersControllers from './controllers/UsersControllers';
import SessionsControllers from './controllers/SessionsControllers';
=======

import { celebrate, Joi } from 'celebrate';

import TypesController from './controllers/TypesControllers';
import ServicesController from './controllers/ServicesControllers';
>>>>>>> 19bfc48d40c61414300bdedd1c3789b94c08fd2d

const routes = express.Router();
const upload = multer(multerConfig);

const typesController = new TypesController();
const servicesController = new ServicesController();
<<<<<<< HEAD
const usersController = new UsersControllers();
const sessionsController = new SessionsControllers();
=======
>>>>>>> 19bfc48d40c61414300bdedd1c3789b94c08fd2d

routes.get('/services', servicesController.index);


<<<<<<< HEAD
routes.get('/typeService/:id', typesController.show);


routes.get('/typeService', typesController.index);
routes.post('/sessions', sessionsController.store);

routes.post('/users', usersController.create);

routes.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
routes.use(authMiddleware);

routes.get('/users/:id', usersController.show);


routes.put('/typeService/:id', typesController.update);
routes.delete('/typeService/:id', typesController.delete);


routes.post('/typeService',   upload.single('image'), 
celebrate({
    body: Joi.object().keys({
        name: Joi.string().required(),
        types: Joi.string().required(),
        actuation: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        services: Joi.string().required(),
    }),
},
{
    abortEarly: false,
}), 

typesController.create);



=======
routes.get('/typeService', typesController.index);
routes.get('/typeService/:id', typesController.show);

routes.post('/typeService',   upload.single('image'), 
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            types: Joi.string().required(),
            actuation: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.number().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            services: Joi.string().required(),
        }),
    },
        {
            abortEarly: false,
        }), 
        
        typesController.create);


        
>>>>>>> 19bfc48d40c61414300bdedd1c3789b94c08fd2d
export default routes;