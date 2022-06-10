import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("adresses")
export class Adress {
  @PrimaryGeneratedColumn("uuid")
  adressId?: string;

  @Column({ nullable: false })
  state: string;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false })
  street: string;

  @Column({ nullable: false })
  number: number;

  @Column({ nullable: false })
  zipcode: number;
}
