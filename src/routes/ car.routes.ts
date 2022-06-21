import { Router } from "express";
import { carController } from "../controllers/car";
import {
  validateToken,
  getCarByIdOr404,
  validateSchemaCar,
} from "../middlewares";
import { createCarSchema } from "../schemas/car";

const carRouter = Router();

carRouter.post(
  "/register",
  validateToken,
  validateSchemaCar(createCarSchema),
  carController.createCar
);
carRouter.get(
  "",
  validateToken,
  carController.getAll
);

carRouter.get(
  "/:carId",
  validateToken,
  getCarByIdOr404,
  carController.getCarById
);

carRouter.patch(
  "/:carId",
  validateToken,
  getCarByIdOr404,
  carController.updateCar
);
carRouter.delete(
  "/:carId",
  validateToken,
  getCarByIdOr404,
  carController.deleteCar
);

export default carRouter;
