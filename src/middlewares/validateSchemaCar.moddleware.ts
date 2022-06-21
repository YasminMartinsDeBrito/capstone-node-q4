import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";
import { ErrorHandler } from "../errors";

const validateSchemaCar =
    (shape: AnySchema) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const validatedCar = await shape.validate(req.body, {
                abortEarly: false,
                stripUnknown: true,
            });

            req.validatedCar = validatedCar;

            return next();
        } catch (error) {
            throw new ErrorHandler(400, { message: error.errors });
        }
    };

export default validateSchemaCar;
