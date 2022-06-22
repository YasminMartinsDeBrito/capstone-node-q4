import { Rating } from "../entities/Rating";
import { User } from "../entities/User";

declare global {
  namespace Express {
    interface Request {
      validated: User | Rating;
      decoded: User;
      user: User;
      rating: Rating;
    }
  }
}
