import { Express } from "express";
import carRouter from "./ car.routes";
import userRouter from "./user.routes";

const registerRouters = (app: Express): void => {
    app.use("/users", userRouter);
    app.use("/cars", carRouter );
};

export default registerRouters;
