import { getCustomRepository } from 'typeorm';

import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';
import UsersRepository from '../repositories/UsersRepository';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
    try{
        const {name, email, password} = request.body;

        const createUser = new CreateUserService();

        const user = await createUser.execute({name, email, password});

        return response.json(user);
    } catch (error) {

        return response.status(400).json({ message: error.message});
    }
});

usersRouter.get('/', async (request, response) => {
    try{
        const usersRepository = getCustomRepository(UsersRepository);

        const users = await usersRepository.find();

        return response.json(users);
    } catch (error) {

        return response.status(400).json({ message: error.message});
    }
});

export default usersRouter;