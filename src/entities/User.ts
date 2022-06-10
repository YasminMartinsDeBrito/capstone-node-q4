import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
} from "typeorm";
import { Address } from "./Address";
import { Car } from "./Car";
import { Rent } from "./Rent";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  userId?: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false, unique: true, length: 11 })
  cpf: string;

  @Column({ default: false })
  license: boolean;

  @Column()
  licenseCategory: string;

  @OneToOne(() => Address, (address) => address.user, { lazy: true })
  address: Address;

  @OneToMany(() => Car, (car) => car.user)
  car: Car;

  @OneToMany(() => Rent, (rent) => rent.user)
  rent: Rent;
}
