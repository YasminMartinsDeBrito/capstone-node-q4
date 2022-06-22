import { Request, Response } from "express";
import { ratingService } from "../../services";

class RatingController {
  createRating = async (req: Request, res: Response) => {
    const rating = await ratingService.createRating(req);

    return res.status(201).json(rating);
  };

  getById = async (request: Request, response: Response) => {
    const rating = await ratingService.getRatingById(request);

    return response.status(200).json(rating);
  };

  getAll = async (request: Request, response: Response) => {
    const ratings = await ratingService.getAll();

    return response.status(200).json({ ratings });
  };

  updateRating = async (request: Request, response: Response) => {
    const updateRating = await ratingService.updateRating(request);

    return response.status(200).json(updateRating);
  };

  deleteRating = async (req: Request, res: Response) => {
    const { status, message } = await ratingService.deleteRating(req);

    return res.status(status).json(message);
  };
}

export default new RatingController();
