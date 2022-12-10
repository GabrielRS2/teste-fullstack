import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1670689055183 implements MigrationInterface {
    name = 'createTables1670689055183'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "cellphone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_65964723c91566b00580a6cf222" UNIQUE ("cellphone")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_65964723c91566b00580a6cf222"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "cellphone"`);
    }

}
