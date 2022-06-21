import { Request, response, Response } from "express";
import { request } from "http";
import rentServices from "../../services/rent/rent.services";
class RentController {
    createRent = async (req:Request, res: Response) => {
        const rent = await rentServices.createRent(req)

        return res.status(201).json(rent)
    }

    getForUser = async (req:Request, res:Response) => {

        const rents = await rentServices.getForUser(req)

        return response.status(200).json(rents)
    }


}

export default new RentController();