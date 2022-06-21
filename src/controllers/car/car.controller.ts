import { Request, Response} from 'express'
import { carService } from '../../services/car'

class CarController {
    createCar = async(req: Request, res: Response) => {
        const car = await carService.createCar(req)
        return res.status(201).json(car)
    }

    getAll = async (req: Request, res: Response) => {
        const cars = await carService.getAll()
        
        // const carsAvailable = cars.find(car => car.available != false)
        return res.status(201).json({cars: cars})
    }

    getCarById = async (req: Request, res: Response) => {
        const car = await carService.getCarById(req)
        return res.status(200).json(car)
    }

    updateCar = async (req: Request, res: Response) => {
        const updateCar = await carService.updateCar(req)
        return res.status(200).json(updateCar)
    }

    deleteCar = async(req: Request, res: Response) => {
        const {status, message} = await carService.deleteCar(req)
        return res.status(status).json(message)
    }
}

export default new CarController()