import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthenticated from '@modules/clients/infra/http/middlewares/ensureAuthenticated';
import FormsController from '../controllers/FormsController';

const formsRouter = Router();
formsRouter.use(ensureAuthenticated);
const formsController = new FormsController();

formsRouter.post('/', celebrate({
  [Segments.BODY]: {
    name: Joi.string().min(3).max(100).required(),
    tag_id: Joi.string().uuid().required()
  }
}),formsController.create);

formsRouter.get('/', formsController.list);

export default formsRouter;