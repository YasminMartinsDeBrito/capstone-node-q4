import { Request } from "express";
import { User } from "../../entities/User";
import { carRepository, rentRepository, userRepository } from "../../repositories";
import * as dotenv from "dotenv";
import { Rent } from "../../entities/Rent";
import { serealizedRentCreateSchema, serealizedRentGetSchema } from "../../schemas/rent";
import { Car } from "../../entities/Car";
import { serializedCreateUserSchema } from "../../schemas";
import  Jwt, { JwtPayload }  from "jsonwebtoken";


dotenv.config();

interface IError {
    status: number;
    message: object | string;
}

class RentService {
    createRent = async (body, {validated}:Request): Promise<IError> => {
        
        const user: User = await userRepository.findOne({
            userId: body.userId
        })
        if (!user){
            return {
                status:404,
                message:"user not fund"
            }
        }
        
        const car:Car = await carRepository.findOne({
            carId: body.carId
        })

        if (!car){
            return {
                status:404,
                message:"car not fund"
            }
        }

        if (car.user.userId === user.userId){
            return{
                status:400,
                message:"you can't rent this car"
            }
        }

       const rent : Rent = await rentRepository.save({
            ...(validated as Rent),
            user,
            car
        })  

        return {
            status: 201,
            message:   await serealizedRentCreateSchema.validate(rent, {
                stripUnknown:true
            })
        }
    }

    
    getForUser = async ({user}: Request) => {

        const rents = await rentRepository.all()
        const results = rents.filter((item) => {
            return item.user.userId === user.userId
        })
    
         return serealizedRentGetSchema.validate(results, {
            stripUnknown: true
        }) 
    }
    
    getFoCar = async ({car}: Request) => {

        const rents = await rentRepository.all()
    
        const results = rents.filter((item) => {
            return item.car.carId === car.carId
        })
    
         return serealizedRentGetSchema.validate(results, {
            stripUnknown: true
        }) 
    }

    confirmationRent = async ({body}:Request, params, token) => {

        const user1 = serializedCreateUserSchema.validate(Jwt.decode(token)) 
    
        const user: User = await userRepository.findOne({
          userId: (await user1).userId
        })

        const rent: Rent = await rentRepository.findOne({
            rentId: params.userId
        }) 

        if (user.userId != rent.car.carId){
            return {
                status:400,
                message:"you are not allowed to access this route"
            }
        }
    
        if (body.comfirmation){
            await rentRepository.update(params.rentId, body)
        }else{
            body.completed = true,
            await rentRepository.update(params.rentId, body)
        } 
        return{
            status:200,
            message:body
        }
    }

    completedRent = async ({body}:Request, params, token) => {
        const user1 = serializedCreateUserSchema.validate(Jwt.decode(token)) 
    
        const user: User = await userRepository.findOne({
          userId: (await user1).userId
        })
        
        const rent: Rent = await rentRepository.findOne({
            rentId: params.userId
        }) 
        if (user.userId != rent.user.userId){
            return {
                status:400,
                message:"you are not allowed to access this route"
            }
        }
        await rentRepository.update(params.rentId, body)

    }

    updateRent = async ({body}:Request, params, token) => {
        const user1 = serializedCreateUserSchema.validate(Jwt.decode(token)) 
    
        const user: User = await userRepository.findOne({
          userId: (await user1).userId
        })
        
        const rent: Rent = await rentRepository.findOne({
            rentId: params.userId
        }) 
        if (user.userId != rent.user.userId){
            return {
                status:400,
                message:"you are not allowed to access this route"
            }
        }
        await rentRepository.update(params.rentId, body)
    }
}

export default new RentService()