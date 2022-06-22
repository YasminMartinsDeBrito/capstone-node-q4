import { Request, Response, NextFunction } from "express";
import { Rent } from "../entities/Rent";
import { ErrorHandler } from "../errors";
import { carRepository, rentRepository } from "../repositories";

const getRentByIdOr404 = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { rentId } = req.params;

    console.log(rentId)
  
    const rent = await rentRepository.findOne({ rentId });


    if (!rent) {
        throw new ErrorHandler(404, "Rent not found.");
    }

    req.rent = rent;

    return next();
};

export default getRentByIdOr404;
