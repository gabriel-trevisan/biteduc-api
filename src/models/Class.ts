import { 
    Entity, 
    Column, 
    PrimaryGeneratedColumn, 
    ManyToOne, 
    JoinColumn
} from 'typeorm'

import Course from './Course';

@Entity('classes')
class Class{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    course_id: string;

    @Column()
    description: string;

    @ManyToOne(() => Course)
    @JoinColumn({ name: 'course_id'})
    course: Course;
}

export default Class;