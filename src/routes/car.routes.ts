import { Router } from "express";
import { carController } from "../controllers/car";
import {
  validateToken,
  getCarByIdOr404,
  userPermission,
  verifyCarExists,
  validateSchema,
} from "../middlewares";
import { createCarSchema } from "../schemas/car";

const carRouter = Router();

carRouter.post(
  "/register",
  validateToken,
  validateSchema(createCarSchema),
  // verifyCarExists,
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
  userPermission,
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
