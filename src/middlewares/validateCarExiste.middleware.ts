import { Request, Response, NextFunction } from "express";
import { Car } from "../entities/Car";
import { ErrorHandler } from "../errors";
import { carRepository} from "../repositories";

const verifyCarExists = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

  const foundCar: Car = await carRepository.findOne({
    plate: req.body.plate,
});

if(foundCar){
    throw new ErrorHandler(409, "Plate  already exists.")
}
return next()
}
export default verifyCarExists