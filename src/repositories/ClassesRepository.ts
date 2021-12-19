import {EntityRepository, Repository} from 'typeorm';
import Class from '../models/Class';

@EntityRepository(Class)
class ClassesRepository extends Repository<Class> {
}

export default ClassesRepository;