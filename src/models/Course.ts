import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    ManyToOne, 
    JoinColumn
} from 'typeorm'

import User from '../models/User';

@Entity('courses')
class Course{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    user_id: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id'})
    user: User;
}

export default Course;