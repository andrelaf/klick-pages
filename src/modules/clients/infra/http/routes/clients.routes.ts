import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ClientsContoller  from '../controllers/ClientsController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const clientsRouter = Router();
const clientsContoller = new ClientsContoller();
 
clientsRouter.post('/', celebrate({
  [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      form_id: Joi.string().uuid().required()
    }
  }),
  clientsContoller.create 
);

clientsRouter.get('/', celebrate({
  [Segments.QUERY]: {
    page: Joi.number().required(),
    limit: Joi.number().max(30).required()
  }
}), ensureAuthenticated , clientsContoller.list);

export default clientsRouter;