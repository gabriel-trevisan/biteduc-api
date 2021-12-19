import { getCustomRepository } from 'typeorm';

import { Router } from 'express';
import CreatecourseService from '../services/CreateCourseService';
import CoursesRepository from '../repositories/CoursesRepository';

const coursesRouter = Router();

coursesRouter.post('/', async (request, response) => {
    try{
        const {name, description, user_id} = request.body;

        const createCourse = new CreatecourseService();

        const course = await createCourse.execute({name, description, user_id});

        return response.json(course);
    } catch (error) {

        return response.status(400).json({ message: error.message});
    }
});

coursesRouter.get('/', async (request, response) => {
    try{
        const coursesRepository = getCustomRepository(CoursesRepository);

        const courses = await coursesRepository.find();

        return response.json(courses);
    } catch (error) {

        return response.status(400).json({ message: error.message});
    }
});

export default coursesRouter;