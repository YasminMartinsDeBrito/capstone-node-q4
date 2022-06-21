import { Router } from "express";
import { userController } from "../controllers";
import rentControllers from "../controllers/rent/rent.controllers";
import { getUserByIdOr404, validateSchema } from "../middlewares";
import {createRentSchema} from "../schemas/rent";

const rentRouter = Router();

rentRouter.post("/create", validateSchema(createRentSchema),rentControllers.createRent)
rentRouter.post("/confirmation")
rentRouter.post("/completed") 
rentRouter.get("/user/:userid", getUserByIdOr404, rentControllers.getForUser)
rentRouter.get("/car")
rentRouter.patch("/:<id>")


export default rentRouter