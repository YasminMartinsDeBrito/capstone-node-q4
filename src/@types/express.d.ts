import { Car } from "../entities/Car";
import { Rating } from "../entities/Rating";
import { User } from "../entities/User";
import { Rent } from "../entities/Rent";


declare global {
  namespace Express {
    interface Request {
      validated: User | Rating | Car | Rent;
      decoded: User;
      user: User;
      rating: Rating;
      rent: Rent;
      car: Car
    }
  }
}
