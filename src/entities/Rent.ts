import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn
} from "typeorm";
import { Car } from "./Car";
import { Rating } from "./Rating";
import { User } from "./User";

@Entity("rents")
export class Rent {
  @PrimaryGeneratedColumn("uuid")
  rentId?: string;

  @Column({ nullable: false })
  start_date: Date;

  @Column({ nullable: false })
  end_date: Date;

  @Column()
  ownerConfirmation: boolean;

  @Column({ default: false })
  completed: boolean;

  @ManyToOne(() => User, (user) => user.rent, {eager: true})
  @JoinColumn()
  user: User;

  @ManyToOne(() => Car, (car) => car.rent, {eager: true})
  @JoinColumn()
  car: Car;

  @OneToMany(() => Rating, (rating) => rating.rent, {eager: true})
  rating: Rating;
}
