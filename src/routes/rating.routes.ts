import { Router } from "express";
import { ratingController } from "../controllers";
import { getCarByIdOr404, getUserByIdOr404, validateSchema, validateToken } from "../middlewares";
import { createRatingSchema } from "../schemas";

const ratingRouter = Router();

ratingRouter.post(
    "/create",
    validateToken,
    validateSchema(createRatingSchema), 
    ratingController.createRating
)

ratingRouter.get(
    "/user/:userId",
    validateToken,
    getUserByIdOr404,
    ratingController.getByUser
)

ratingRouter.get(
    "/car/:carId",
    validateToken,
    getCarByIdOr404,
    ratingController.getByCar
)

ratingRouter.patch(
    "/:ratingId",
    validateToken,
    ratingController.updateRating
)

ratingRouter.delete(
    "/:ratingId",
    validateToken,
    ratingController.deleteRating
)

export default ratingRouter;
