import { Router } from "express";
import rentControllers from "../controllers/rent/rent.controllers";
import { getCarByIdOr404, getUserByIdOr404, validateSchema } from "../middlewares";
import getRentByIdOr404 from "../middlewares/getRentByIdOr404.middleware";
import {createRentSchema} from "../schemas/rent";
import {validateToken} from "../middlewares";

const rentRouter = Router();

rentRouter.post("/create", validateToken, validateSchema(createRentSchema),rentControllers.createRent)
rentRouter.post("/confirmation/:rentId", validateToken, getRentByIdOr404, rentControllers.confirmationRent)
rentRouter.post("/completed/:rentId", validateToken, getRentByIdOr404, rentControllers.completedRent) 
rentRouter.get("/user/:userId", validateToken, getUserByIdOr404, rentControllers.getForUser)
rentRouter.get("/car/:carId", validateToken, getCarByIdOr404, rentControllers.getForCar)
rentRouter.patch("/:rentId", validateToken, getRentByIdOr404, rentControllers.updateRent)


export default rentRouter