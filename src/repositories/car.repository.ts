import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Car } from "../entities/Car";

interface ICarRepo {
  save: (car: Partial<Car>) => Promise<Car>;
  all: () => Promise<Car[]>;
  findOne: (payload: object) => Promise<Car>;
  update: (id: string, payload: Partial<Car>) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
  
};

class CarRepo implements ICarRepo {
  repo: Repository<Car>;

  constructor() {
    this.repo = AppDataSource.getRepository(Car);
  };

  save = async (cars: Partial<Car>) => await this.repo.save(cars);

  all = async () => await this.repo.find();


  findOne = async (payload: object) => {
    return await this.repo.findOneBy({ ...payload });
  };

  update = async (carId:string, payload: Partial<Car>) => {
    return await this.repo.update(carId,{...payload});
  };

  delete = async (id: string) => {
    return await this.repo.delete(id)
  }

}
export default new CarRepo();
