import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
}
