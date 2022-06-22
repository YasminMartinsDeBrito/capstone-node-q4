import { Request, Response } from "express";
import { ratingService } from "../../services";

class RatingController {
  createRating = async (req: Request, res: Response) => {
    const rating = await ratingService.createRating(req, req.headers.authorization.split(" ")[1]);

    return res.status(rating.status).json({message:rating.message});
  };

  getByUser = async (request: Request, response: Response) => {
    const rating = await ratingService.getRatingByUser(request.params);

    return response.status(rating.status).json(rating.message);
  };

  getByCar = async (request: Request, response: Response) => {
    const ratings = await ratingService.getRatingByCar(request.params);

    return response.status(ratings.status).json({ message: ratings.message });
  };

  updateRating = async (request: Request, response: Response) => {
    const updateRating = await ratingService.updateRating(
      request, 
      request.params, 
      request.headers.authorization.split(" ")[1]
    );

    return response.status(200).json(updateRating);
  };

  deleteRating = async (request: Request, res: Response) => {
    const { status, message } = await ratingService.deleteRating(
      request, 
      request.params, 
      request.headers.authorization.split(" ")[1]
      );

    return res.status(status).json(message);
  };
}

export default new RatingController();
