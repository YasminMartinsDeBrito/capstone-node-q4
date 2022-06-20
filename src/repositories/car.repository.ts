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
  private ormRepo: Repository<Car>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Car);
  };

  save = async (car: Partial<Car>) => {
    return await this.ormRepo.save(car);
  };

  all = async () => {
    return await this.ormRepo.find();
  };

  findOne = async (payload: object) => {
    return await this.ormRepo.findOneBy({ ...payload });
  };

  update = async (carId:string, payload: Partial<Car>) => {
    return await this.ormRepo.update(carId,{...payload});
  };

  delete = async (id: string) => {
    return await this.ormRepo.delete(id)
  }

}
export default new CarRepo();
