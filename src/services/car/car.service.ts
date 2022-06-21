import { Request } from "express";
import { Car } from "../../entities/Car";
import { carRepository } from "../../repositories";
// import { getAllCarsSchema } from "../../schemas";
import { serializedCreateCarSchema } from "../../schemas/car";

interface ICar {
  status: number;
  message: object;
}

class CarService {
  createCar = async ({validatedCar}: Request) => {
    const createCars = await carRepository.save(validatedCar)

    return await serializedCreateCarSchema.validate(createCars)
  };

  // getAll = async (): Promise<Partial<Car>[]> => {
  //   const cars = await carRepository.all()
  //   return getAllCarsSchema.validate(cars, {
  //     stripUnknown: true
  //   })
  // };

  getCarById = async ({car}: Request): Promise<Partial<Car>> => {
    const carFind = await carRepository.findOne({carId: car.carId})

    return serializedCreateCarSchema.validate(carFind,{
      stripUnknown: true
    })
  };

  updateCar = async ({decodedCar, body}: Request):Promise<Partial<Car>> => {
   await carRepository.update(decodedCar.carId,{...body})

    return serializedCreateCarSchema.validate(
      {...decodedCar, ...body},
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
