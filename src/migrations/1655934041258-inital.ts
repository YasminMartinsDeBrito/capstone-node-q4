import { MigrationInterface, QueryRunner } from "typeorm";

export class inital1655934041258 implements MigrationInterface {
    name = 'inital1655934041258'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ratings" ("ratingId" uuid NOT NULL DEFAULT uuid_generate_v4(), "rating" integer NOT NULL, "comment" character varying NOT NULL, "evaluator" character varying NOT NULL, "rentRentId" uuid, "userUserId" uuid, CONSTRAINT "PK_fe5a1ca832a8d42cde9eb99183d" PRIMARY KEY ("ratingId"))`);
        await queryRunner.query(`CREATE TABLE "rents" ("rentId" uuid NOT NULL DEFAULT uuid_generate_v4(), "start_date" TIMESTAMP NOT NULL, "end_date" TIMESTAMP NOT NULL, "ownerConfirmation" boolean NOT NULL, "completed" boolean NOT NULL DEFAULT false, "userUserId" uuid, "carCarId" uuid, CONSTRAINT "PK_7187acc715b9f340e4bf29e546c" PRIMARY KEY ("rentId"))`);
        await queryRunner.query(`CREATE TABLE "cars" ("carId" uuid NOT NULL DEFAULT uuid_generate_v4(), "model" character varying NOT NULL, "brand" character varying NOT NULL, "plate" character varying NOT NULL, "color" character varying NOT NULL, "transmission" character varying NOT NULL, "year" character varying NOT NULL, "mileage" character varying NOT NULL, "dailyPrice" integer NOT NULL, "available" boolean NOT NULL DEFAULT true, "userUserId" uuid, "rentRentId" uuid, CONSTRAINT "UQ_a309ce7ba400919557999e69be1" UNIQUE ("plate"), CONSTRAINT "PK_6af24bbe951c8a6b2f6fb8adc17" PRIMARY KEY ("carId"))`);
        await queryRunner.query(`CREATE TABLE "users" ("userId" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "cpf" character varying(11) NOT NULL, "license" boolean NOT NULL DEFAULT false, "licenseCategory" character varying NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "PK_8bf09ba754322ab9c22a215c919" PRIMARY KEY ("userId"))`);
        await queryRunner.query(`CREATE TABLE "addresses" ("adressId" uuid NOT NULL DEFAULT uuid_generate_v4(), "state" character varying NOT NULL, "city" character varying NOT NULL, "street" character varying NOT NULL, "number" integer NOT NULL, "zipcode" integer NOT NULL, "userUserId" uuid, CONSTRAINT "REL_0cb4a718cc49a5bc41bf4f950e" UNIQUE ("userUserId"), CONSTRAINT "PK_19415387c1f85bb879f8f156f75" PRIMARY KEY ("adressId"))`);
        await queryRunner.query(`ALTER TABLE "ratings" ADD CONSTRAINT "FK_5159f2d27c6851d47e17d37ec49" FOREIGN KEY ("rentRentId") REFERENCES "rents"("rentId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ratings" ADD CONSTRAINT "FK_c823a6706ae86f0fe0ea9f3209b" FOREIGN KEY ("userUserId") REFERENCES "users"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rents" ADD CONSTRAINT "FK_955fc27d0036d014f2ba67c0dbf" FOREIGN KEY ("userUserId") REFERENCES "users"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rents" ADD CONSTRAINT "FK_79a0d9d6f4184aeabcd30a16ff0" FOREIGN KEY ("carCarId") REFERENCES "cars"("carId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "FK_f0fca043d74d8fc8223b72e61f4" FOREIGN KEY ("userUserId") REFERENCES "users"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cars" ADD CONSTRAINT "FK_5e7bb350749d6a25b7001f33edf" FOREIGN KEY ("rentRentId") REFERENCES "rents"("rentId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "FK_0cb4a718cc49a5bc41bf4f950e8" FOREIGN KEY ("userUserId") REFERENCES "users"("userId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "FK_0cb4a718cc49a5bc41bf4f950e8"`);
        await queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "FK_5e7bb350749d6a25b7001f33edf"`);
        await queryRunner.query(`ALTER TABLE "cars" DROP CONSTRAINT "FK_f0fca043d74d8fc8223b72e61f4"`);
        await queryRunner.query(`ALTER TABLE "rents" DROP CONSTRAINT "FK_79a0d9d6f4184aeabcd30a16ff0"`);
        await queryRunner.query(`ALTER TABLE "rents" DROP CONSTRAINT "FK_955fc27d0036d014f2ba67c0dbf"`);
        await queryRunner.query(`ALTER TABLE "ratings" DROP CONSTRAINT "FK_c823a6706ae86f0fe0ea9f3209b"`);
        await queryRunner.query(`ALTER TABLE "ratings" DROP CONSTRAINT "FK_5159f2d27c6851d47e17d37ec49"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "cars"`);
        await queryRunner.query(`DROP TABLE "rents"`);
        await queryRunner.query(`DROP TABLE "ratings"`);
    }

}
