import { Router } from 'express';
import tagsRouter from '@modules/tags/infra/http/routes/tags.routes';
import formsRouter from '@modules/forms/infra/http/routes/forms.routes';
import clientsRouter from '@modules/clients/infra/http/routes/clients.routes';
import sessionsRouter from '@modules/clients/infra/http/routes/sessions.routes';
const routes = Router();

routes.use('/tags', tagsRouter);
routes.use('/forms', formsRouter);
routes.use('/clients', clientsRouter);
routes.use('/sessions', sessionsRouter);

export default routes;