import { Request, Response } from "express";
import rentServices from "../../services/rent/rent.services";
class RentController {
    createRent = async (req:Request, res: Response) => {
        const body = req.body
        const rent = await rentServices.createRent(body, req)

        return res.status(rent.status).json({message:rent.message})
    }

    getForUser = async (req:Request, res:Response) => {

        const rents = await rentServices.getForUser(req)

        return res.status(200).json(rents)
    }
    
    getForCar = async (req:Request, res:Response) => {

        const rents = await rentServices.getFoCar(req)

        return res.status(200).json(rents)
    }

    confirmationRent = async (req:Request, res:Response) => {
        
        const confir = await rentServices.confirmationRent(
            req, 
            req.params, 
            req.headers.authorization.split(" ")[1]
        )
        return res.status(confir.status).json({message:confir.message})
        
    }

    completedRent = async (req:Request, res: Response) => {
        const complete = await rentServices.completedRent(
            req, 
            req.params, 
            req.headers.authorization.split(" ")[1])

        return res.status(complete.status).json(complete.message)
    }

    updateRent = async (req:Request, res:Response) => {
        const upedate = await rentServices.updateRent(
            req, 
            req.params,
            req.headers.authorization.split(" ")[1]
        )
        return res.status(200).json(upedate)
    }
}

export default new RentController();