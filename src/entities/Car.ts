import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Rent } from "./Rent";
import { User } from "./User";

@Entity("cars")
export class Car {
  @PrimaryGeneratedColumn("uuid")
  carId?: string;

  @Column({ nullable: false })
  model: string;

  @Column({ nullable: false })
  brand: string;

  @Column({ nullable: false, unique: true })
  plate: string;

  @Column({ nullable: false })
  color: string;

  @Column({ nullable: false })
  transmission: string;

  @Column({ nullable: false })
  year: string;

  @Column({ nullable: false })
  mileage: string;

  @Column({ nullable: false })
  dailyPrice: number;

  @Column({ default: true })
  available: boolean;

  @ManyToOne(() => User, (user) => user.car, {eager: true})
  user: User;

  @ManyToOne(() => Rent, (rent) => rent.car)
  rent: Rent;
}
