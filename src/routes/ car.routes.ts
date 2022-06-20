import { Router } from "express";
import { carController } from "../controllers/car";
import {
  validateToken,
  userPermission,
  validateSchema,
  getUserByIdOr404,
} from "../middlewares";
import { createCarSchema } from "../schemas/car";

const carRouter = Router();

carRouter.post(
  "/register",
  validateToken,
  userPermission,
  validateSchema(createCarSchema),
  carController.createCar
);
// carRouter.get("", validateToken, carController.getAll);
carRouter.get("/:carId", getUserByIdOr404, carController.getCarById);
carRouter.patch(
  "/:carId",
  validateToken,
  getUserByIdOr404,
  userPermission,
  carController.updateCar
);
carRouter.delete(
  "/:carId",
  validateToken,
  getUserByIdOr404,
  userPermission,
  carController.deleteCar
);

export default carRouter;
