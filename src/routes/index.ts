import { Router } from 'express';
import usersRouter from './users.routes';
import courseRouter from './courses.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/courses', courseRouter);

export default routes;