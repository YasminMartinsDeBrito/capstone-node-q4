import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
} from "typeorm";
import { Rent } from "./Rent";

@Entity("ratings")
export class Rating {
  @PrimaryGeneratedColumn("uuid")
  ratingId?: string;

  @Column()
  rating: number;

  @Column()
  comment: string;

  @ManyToOne(() => Rent, (rent) => rent.rating)
  rent: Rent;

  @OneToOne(
    () => Rent,
    (rent) => {
      rent.owner;
    }
  )
  rent: Rent;
}
