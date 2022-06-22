import { Car } from "../entities/Car";
import { User } from "../entities/User";

declare global {
    namespace Express {
        interface Request {
            validated: User | Car
            decoded: User 
            user: User;
            car: Car;
        }
    }
}
