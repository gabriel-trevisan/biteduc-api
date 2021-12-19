import { getCustomRepository } from 'typeorm';
import CoursesRepository from '../repositories/CoursesRepository';
import Course from '../models/Course';

interface Request {
    name: string,
    user_id: string,
    description: string
}

class CreateCourseService {
    public async execute({name, description, user_id}: Request): Promise<Course>{

        const coursesRepository = getCustomRepository(CoursesRepository);

        const course = coursesRepository.create({name, description, user_id});
    
        await coursesRepository.save(course);

        return course;
    }
}

export default CreateCourseService;