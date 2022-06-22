import { Request } from "express";
import { Rating } from "../../entities/Rating";
import { ratingRepository } from "../../repositories";
import * as dotenv from "dotenv";
import {
  getAllRatingsSchema,
  serializedCreateRatingSchema,
} from "../../schemas";

dotenv.config();

interface IRating {
  status: number;
  message: object;
}

class ratingService {
  createRating = async ({ validated }: Request): Promise<any> => {
    const rating: Rating = await ratingRepository.save(validated as Rating);

    return await serializedCreateRatingSchema.validate(rating, {
      stripUnknown: true,
    });
  };

  getRatingById = async ({ rating }: Request): Promise<Partial<Rating>> => {
    const ratingFind = await ratingRepository.findOne({
      ratingId: rating.ratingId,
    });

    return serializedCreateRatingSchema.validate(ratingFind, {
      stripUnknown: true,
    });
  };

  getAll = async (): Promise<Partial<Rating>[]> => {
    const ratings = await ratingRepository.all();

    return getAllRatingsSchema.validate(ratings, {
      stripUnknown: true,
    });
  };

  updateRating = async ({
    rating,
    body,
  }: Request): Promise<Partial<Rating>> => {
    await ratingRepository.update(rating.ratingId, { ...body });

    return serializedCreateRatingSchema.validate(
      { ...rating, ...body },
      {
        stripUnknown: true,
      }
    );
  };

  deleteRating = async ({ rating }: Request): Promise<IRating> => {
    await ratingRepository.delete(rating.ratingId);

    return {
      status: 200,
      message: { message: "Rating has been deleted" },
    };
  };
}

export default new ratingService();
