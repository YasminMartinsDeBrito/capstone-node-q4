import { Car } from "../entities/Car";
import { Rating } from "../entities/Rating";
import { User } from "../entities/User";

declare global {
  namespace Express {
    interface Request {
      validated: User | Rating | Car;
      decoded: User;
      user: User;
      rating: Rating;
    }
  }
}
