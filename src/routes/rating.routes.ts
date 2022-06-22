import { Router } from "express";
import { ratingController } from "../controllers";
import { userPermission, validateSchema, validateToken } from "../middlewares";

const ratingRouter = Router();

export default ratingRouter;
