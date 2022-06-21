import { Rent } from "../entities/Rent";
import { User } from "../entities/User";

declare global {
    namespace Express {
        interface Request {
            validated: User|Rent;
            decoded: User ;
            user: User;
        }
    }
}
