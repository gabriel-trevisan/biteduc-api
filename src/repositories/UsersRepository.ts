import {EntityRepository, Repository} from 'typeorm';
import User from '../models/User';

@EntityRepository(User)
class UsersRepository extends Repository<User> {
    public async findByEmail(email: string): Promise<User | null>{

        const findEmail = await this.findOne({
            where: { email }
        })

        return findEmail || null;
    }
}

export default UsersRepository;