import { getCustomRepository } from 'typeorm';
import UsersRepository from '../repositories/UsersRepository';
import User from '../models/User';

interface Request {
    name: string,
    email: string,
    password: string
}

class CreateUserService {
    public async execute({name, email, password}: Request): Promise<User>{

        const usersRepository = getCustomRepository(UsersRepository);

        const findEmail = await usersRepository.findByEmail(
            email
        )
    
        if(findEmail){
            throw Error('E-mail já cadastrado, favor digite outro e-mail');
        }

        const user = usersRepository.create({
            name,
            email,
            password
        })
    
        await usersRepository.save(user);

        return user;
    }
}

export default CreateUserService;