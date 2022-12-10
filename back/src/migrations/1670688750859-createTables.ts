import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1670688750859 implements MigrationInterface {
    name = 'createTables1670688750859'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "contactsId" uuid, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "REL_76ab0e807ace56c0f43f316da6" UNIQUE ("contactsId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contactsUser" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" uuid, "contactListId" uuid, CONSTRAINT "PK_084d3eed164ab330ba22c89f70c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_76ab0e807ace56c0f43f316da6f" FOREIGN KEY ("contactsId") REFERENCES "contacts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contactsUser" ADD CONSTRAINT "FK_1e9e35d4078198cc967982b8b26" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contactsUser" ADD CONSTRAINT "FK_67fc244493541899a7f6c127ab0" FOREIGN KEY ("contactListId") REFERENCES "contacts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contactsUser" DROP CONSTRAINT "FK_67fc244493541899a7f6c127ab0"`);
        await queryRunner.query(`ALTER TABLE "contactsUser" DROP CONSTRAINT "FK_1e9e35d4078198cc967982b8b26"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_76ab0e807ace56c0f43f316da6f"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`DROP TABLE "contactsUser"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
