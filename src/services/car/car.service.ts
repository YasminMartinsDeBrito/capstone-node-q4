import { Request } from "express";
import { AssertsShape } from "yup/lib/object";
import { Car } from "../../entities/Car";
import { carRepository } from "../../repositories";
import { getAllCarsSchema, serializedCreateCarSchema } from "../../schemas/car";

interface ICar {
  status: number;
  message: object;
}

class CarService {
  createCar = async ({ validatedCar }: Request): Promise<AssertsShape<any>> => {
    const createCars = await carRepository.save(validatedCar)
    return await serializedCreateCarSchema.validate(createCars, {stripUnknown:true})
  };

  getAll = async (): Promise<Partial<Car>[]> => {
    const cars = await carRepository.all()
   
    return getAllCarsSchema.validate(cars, {
      stripUnknown: true
    })
  };

  getCarById = async ({car}: Request): Promise<Partial<Car>> => {
    const carFind = await carRepository.findOne({carId: car.carId})

    return serializedCreateCarSchema.validate(carFind,{
      stripUnknown: true
    })
  };

  updateCar = async ({car, body}: Request):Promise<Partial<Car>> => {
   await carRepository.update(car .carId,{...body})
   console.log("body:",body)
   console.log("decoded:",car )
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
