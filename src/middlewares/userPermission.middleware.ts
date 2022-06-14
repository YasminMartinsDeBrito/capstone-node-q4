import { userRepository } from "../repositories";
import { Request, Response, NextFunction } from "express";
import { ErrorHandler } from "../errors";

const userPermission = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const decodedUser = await userRepository.findOne({
        userId: req.decoded.userId,
    });
    const paramsUser = req.user;

    if (decodedUser?.userId != paramsUser.userId) {
        throw new ErrorHandler(403, "You can't update/delete another user.");
    }

    return next();
};

export default userPermission;
