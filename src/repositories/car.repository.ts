import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Car } from "../entities/Car";

interface ICarRepo {
  save: (cars: Partial<Car>) => Promise<Car>;
  all: () => Promise<Car[]>;
  findOne: (payload: object) => Promise<Car>;
  update: (id: string, payload: Partial<Car>) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
  
};

class CarRepo implements ICarRepo {
  private repo: Repository<Car>;

  constructor() {
    this.repo = AppDataSource.getRepository(Car);
  };

  save = async (cars: Car): Promise<Car> => await this.repo.save(cars);

  all = async () => await this.repo.find();


  findOne = async (payload: object) => await this.repo.findOneBy({ ...payload });
  

  update = async (carId:string, payload: Partial<Car>) : Promise<UpdateResult>=> {
    return await this.repo.update(carId,{...payload});
  };

  delete = async (id: string): Promise<DeleteResult> => await this.repo.delete(id)
  

}
export default new CarRepo();
