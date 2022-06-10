import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("ratings")
export class Rating {
  @PrimaryGeneratedColumn("uuid")
  ratingId?: string;

  @Column()
  rating: number;

  @Column()
  comment: string;
}
