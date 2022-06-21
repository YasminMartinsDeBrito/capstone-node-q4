import { Express } from "express";
import userRouter from "./user.routes";
import rentRouter from "./rent.routes";
import { assert } from "console";

const registerRouters = (app: Express): void => {
    app.use("/users", userRouter);
    app.use("/rent", rentRouter);
};

export default registerRouters;
