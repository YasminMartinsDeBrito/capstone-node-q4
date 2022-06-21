import { Request, Response, NextFunction } from "express";
import { ErrorHandler } from "../errors";
import { carRepository } from "../repositories";

const getCarByIdOr404 = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { carId } = req.params;

    console.log(carId);

    const car = await carRepository.findOne({ carId });

    console.log(car);

    if (!car) {
        throw new ErrorHandler(404, "Car not found.");
    }

    req.car = car;

    return next();
};

export default getCarByIdOr404;
