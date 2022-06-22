import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Rent } from "./Rent";
import { User } from "./User";

@Entity("ratings")
export class Rating {
  @PrimaryGeneratedColumn("uuid")
  ratingId?: string;

  @Column()
  rating: number;

  @Column()
  comment: string;

  @Column()
  evaluator: string;

  @ManyToOne(() => Rent, (rent) => rent.rating)
  rent: Rent;

  @ManyToOne(() => User, (user) => user.rating, {eager: true})
  user: User;
}
