import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ClientsContoller  from '../controllers/ClientsController';
const clientsRouter = Router();
const clientsContoller = new ClientsContoller();
 
clientsRouter.post('/', celebrate({
  [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      passwor: Joi.string().required(),
      form_id: Joi.string().uuid().required()
    }
  }),
  clientsContoller.create 
);

clientsRouter.get('/', clientsContoller.list);

export default clientsRouter;