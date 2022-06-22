import { Express } from "express";
import carRouter from "./car.routes";
import userRouter from "./user.routes";
import rentRouter from "./rent.routes";
import { assert } from "console";

const registerRouters = (app: Express): void => {
    app.use("/users", userRouter);
<<<<<<< HEAD
    app.use("/rent", rentRouter);
=======
    app.use("/cars", carRouter);
>>>>>>> 883f922bff15c9e68f7b3e6e9bc2824c323a6a97
};

export default registerRouters;
