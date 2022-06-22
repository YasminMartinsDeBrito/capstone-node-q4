import { Car } from "../entities/Car";
import { Rent } from "../entities/Rent";
import { User } from "../entities/User";

declare global {
    namespace Express {
        interface Request {
            validated: User | Rent | Car;
            decoded: User | Rent;
            user: User;
            car: Car;
            rent: Rent;
        }
    }
}
