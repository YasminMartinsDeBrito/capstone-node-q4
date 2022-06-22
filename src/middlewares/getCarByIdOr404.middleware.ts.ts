import { Request, Response, NextFunction } from "express";
import { Car } from "../entities/Car";
import { ErrorHandler } from "../errors";
import { carRepository } from "../repositories";

const getCarByIdOr404 = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { carId } = req.params;

  
    const car = await carRepository.findOne({ carId });


    if (!car) {
        throw new ErrorHandler(404, "Car not found.");
    }

    req.car = car;

    return next();
};

export default getCarByIdOr404;
