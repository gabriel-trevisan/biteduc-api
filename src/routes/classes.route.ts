import { getCustomRepository } from 'typeorm';

import { Router } from 'express';
import CreateClassService from '../services/CreateClassService';
import ClassesRepository from '../repositories/ClassesRepository';

const classesRouter = Router();

classesRouter.post('/', async (request, response) => {
    try{
        const {name, description, course_id} = request.body;

        const createClass = new CreateClassService();

        const course = await createClass.execute({name, description, course_id});

        return response.json(course);
    } catch (error) {

        return response.status(400).json({ message: error.message});
    }
});

classesRouter.get('/', async (request, response) => {
    try{
        const classesRepository = getCustomRepository(ClassesRepository);

        const courses = await classesRepository.find();

        return response.json(courses);
    } catch (error) {

        return response.status(400).json({ message: error.message});
    }
});

export default classesRouter;