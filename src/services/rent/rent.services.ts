import { Request } from "express";
import { sign } from "jsonwebtoken";
import { User } from "../../entities/User";
import { rentRepository, userRepository } from "../../repositories";
import * as dotenv from "dotenv";
import { AssertsShape } from "yup/lib/object";
import { hash } from "bcrypt";
import {
    getAllUsersSchema,
    serializedCreateUserSchema,
} from "../../schemas/user";
import { Rent } from "../../entities/Rent";
import { validateSchema } from "../../middlewares";
import { serealizedRentSchema } from "../../schemas/rent";

dotenv.config();

interface ILogin {
    status: number;
    message: object;
}

class RentService {
    createRent = async ({validated, decoded}: Request) => {
        
        const user: User = await userRepository.findOne({
           userId: (validated as Rent).user
        })

        const rent : Rent = await rentRepository.save({
            ...(validated as Rent),
            user
        })


        return await serealizedRentSchema.validate(rent, {
            stripUnknown:true
        })
    }

    getForUser = async ({user}: Request) => {

        const rents = await rentRepository.all()
        const results = rents.filter((item) => {
            return item.user.userId === user.userId
        })
        
        return serealizedRentSchema.validate(results, {
            stripUnknown: true,
        }) 
    }
}

export default new RentService()