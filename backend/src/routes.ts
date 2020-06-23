import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import { celebrate, Joi } from 'celebrate';

import TypesController from './controllers/TypesControllers';
import ServicesController from './controllers/ServicesControllers';

const routes = express.Router();
const upload = multer(multerConfig);

const typesController = new TypesController();
const servicesController = new ServicesController();

routes.get('/services', servicesController.index);


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


        
export default routes;