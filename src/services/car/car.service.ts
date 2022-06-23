import { Request } from "express";
import  Jwt, { JwtPayload }  from "jsonwebtoken";
import { type } from "os";
import { AssertsShape } from "yup/lib/object";
import { Car } from "../../entities/Car";
import { User } from "../../entities/User";
import { carRepository, userRepository } from "../../repositories";
import { serializedCreateUserSchema } from "../../schemas";
import { getAllCarsSchema, serializedCreateCarSchema } from "../../schemas/car";

interface ICar {
  status: number;
  message: object;
}

class CarService {
  createCar = async ({ validated }: Request, token)/*: Promise<AssertsShape<any>> */ => {

    const user1 = serializedCreateUserSchema.validate(Jwt.decode(token)) 
    
    const user: User = await userRepository.findOne({
      userId: (await user1).userId
    })

    const createCars = await carRepository.save({
      ...(validated as Car),
      user
    })

    return serializedCreateCarSchema.validate(createCars, {stripUnknown:true}) 
  };

  getAll = async (): Promise<Partial<Car>[]> => {
    const cars = await carRepository.all()
    const carsFilter = cars.filter((car) =>car.available == true)
    return getAllCarsSchema.validate(carsFilter, {
      stripUnknown: true
    })
  };

   getCarById = async ({car}: Request) => {
    const carFind = await carRepository.findOne({carId: car.carId})

    return serializedCreateCarSchema.validate(carFind,{
      stripUnknown: true
    })
  };

  updateCar = async ({car, body}: Request) => {

   await carRepository.update(car.carId,{...body})
    return serializedCreateCarSchema.validate(
      {...car , ...body},
      {stripUnknown:true}
    )
  }; 

  deleteCar = async ({ car }: Request): Promise<ICar> => {
    await carRepository.delete(car.carId);
    return {
      status: 200,
      message: { message: "Car has been deleted" },
    };
  };
}

export default new CarService();
