import { Car } from "../entities/Car";
import { User } from "../entities/User";

declare global {
    namespace Express {
        interface Request {
            validated: User;
            decoded: User;
            user: User;
            car: Car;
            validatedCar: Car;
            decodedCar: Car;
        }
    }
}
