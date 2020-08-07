import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ensureAuthenticated from '@modules/clients/infra/http/middlewares/ensureAuthenticated';
import TagsController from  '../controllers/TagsController';
 
const tagsRouter = Router();
tagsRouter.use(ensureAuthenticated);
const tagsController = new TagsController();

tagsRouter.post('/', celebrate({
  [Segments.BODY]: {
    name: Joi.string().min(3).max(12).required()
  }
}),tagsController.create);

tagsRouter.get('/', tagsController.list);
export default tagsRouter;