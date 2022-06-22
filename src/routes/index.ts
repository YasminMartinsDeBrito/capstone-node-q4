import { Express } from "express";
import carRouter from "./car.routes";
import userRouter from "./user.routes";
import ratingRouter from "./rating.routes";

const registerRouters = (app: Express): void => {
    app.use("/users", userRouter);
    app.use("/ratings", ratingRouter);
    app.use("/cars", carRouter);
};

export default registerRouters;
