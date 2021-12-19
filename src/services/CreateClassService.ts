import { getCustomRepository } from 'typeorm';
import ClassesRepository from '../repositories/ClassesRepository';
import Class from '../models/Class';

interface Request {
    name: string,
    course_id: string,
    description: string
}

class CreateClassService {
    public async execute({name, description, course_id}: Request): Promise<Class>{

        const classesRepository = getCustomRepository(ClassesRepository);

        const lesson = classesRepository.create({
            name, 
            description, 
            course_id
        });
    
        await classesRepository.save(lesson);

        return lesson;
    }
}

export default CreateClassService;