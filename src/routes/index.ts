import { Express } from "express";
import userRouter from "./user.routes";
import ratingRouter from "./rating.routes";

const registerRouters = (app: Express): void => {
  app.use("/users", userRouter);
  app.use("/ratings", ratingRouter);
};

export default registerRouters;
