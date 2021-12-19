import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export default class AlterDescriptionInCourses1639940269416 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('courses', new TableColumn({
            name: 'description',
            type: 'varchar'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('courses', 'description');
    }

}
