import { Router } from 'express';
import usersRouter from './users.routes';
import courseRouter from './courses.routes';
import classesRouter from './classes.route';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/courses', courseRouter);
routes.use('/classes', classesRouter);

export default routes;