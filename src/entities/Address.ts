import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { User } from "./User";

@Entity("addresses")
export class Address {
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

  @OneToOne(() => User, (user) => user.address, { nullable: true })
  @JoinColumn()
  user: User;
}
