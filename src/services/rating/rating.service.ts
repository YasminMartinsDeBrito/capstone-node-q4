import { Request } from "express";
import { Rating } from "../../entities/Rating";
import { ratingRepository, rentRepository, userRepository } from "../../repositories";
import  Jwt, { JwtPayload }  from "jsonwebtoken";
import * as dotenv from "dotenv";
import {
  getAllRatingsSchema,
  serializedCreateRatingSchema,
  serializedCreateUserSchema,
} from "../../schemas";
import { User } from "../../entities/User";
import { Rent } from "../../entities/Rent";
import { number } from "yup";

dotenv.config();

interface IRating {
  status: number;
  message: object;
}

class ratingService {
  createRating = async ({ validated, body }: Request, token): Promise<any> => {
    
    const user1 = serializedCreateRatingSchema.validate(Jwt.decode(token)) 
    
    const user: User = await userRepository.findOne({
      userId: (await user1).userId
    })

    const rent: Rent = await rentRepository.findOne({
      rentId: body.rentId
    })
    if (!rent){
      return{
        status:404,
        message:"Rent not fund"
      }
    }

    if (user.userId !== rent.car.user.userId && user.userId !== rent.user.userId){
      return{
        status:400,
        message:"you are not allowed to access this route"
      }
    }
    
    const rating: Rating = await ratingRepository.save(
      {
        ...(validated as Rating),
        user,
        rent,
      });

    return await {
      status:201,
      message:serializedCreateRatingSchema.validate(rating, {stripUnknown: true,})
    }
  };

  getRatingByUser = async ( params ) => {
    const rating = await ratingRepository.all();

    
    const ratingsFind = rating.filter((item) => {
      return item.user.userId === params.userId
    })

 /*    const note = ratings.reduce((acc, cur)=> {
      return acc.rating + cur.rating
    }) */

    return {
      message:await getAllRatingsSchema.validate(ratingsFind, {
        stripUnknown: true,
      }),
      status:200
    }
  };

  getRatingByCar = async (params) => {
    const ratings = await ratingRepository.all();

    const ratingsFind = ratings.filter((item) => {
      return item.rent.car.carId === params.carId
    })

     /*    const note = ratings.reduce((acc, cur)=> {
      return acc.rating + cur.rating
    }) */

    return {
        message:await getAllRatingsSchema.validate(ratingsFind, {
          stripUnknown: true,
        }),
        status:200
    }
  };

  updateRating = async ({
    body,
  }: Request, params, token) => {
    const user1 = serializedCreateUserSchema.validate(Jwt.decode(token)) 
    
        const user: User = await userRepository.findOne({
          userId: (await user1).userId
        })
        
        const rating: Rating = await ratingRepository.findOne({
            rentId: params.userId
        }) 
        if (user.userId != rating.user.userId){
            return {
                status:400,
                message:"you are not allowed to access this route"
            }
        }
        console.log(params)
        console.log(body)

        await ratingRepository.update(params.ratingId, body)

        return {
          status:200,
          message:body
        }
  };

  deleteRating = async ({ body }: Request, params, token)  => {
    const user1 = serializedCreateUserSchema.validate(Jwt.decode(token)) 
    
    const user: User = await userRepository.findOne({
      userId: (await user1).userId
    })
    const rating: Rating = await ratingRepository.findOne({
      rentId: params.userId
    }) 
    if (user.userId != rating.user.userId){
        return {
            status:400,
            message:"you are not allowed to access this route"
        }
    }
    await ratingRepository.delete(params.ratingId);

    return {
      status: 200,
      message: { message: "Rating has been deleted" },
    };
  };
}

export default new ratingService();
