import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Rent } from "../entities/Rent";

interface IRentRepo {
    save: (rent: Partial<Rent>) => Promise<Rent>;
    all: () => Promise<Rent[]>;
    find: (payload: object) => Promise<Rent[]>;
    update: (id: string, payload: Partial<Rent>) => Promise<UpdateResult>;
    delete: (id: string) => Promise<DeleteResult>;
}
 class RentRepo implements IRentRepo{
    private ormRepo: Repository<Rent>

    constructor(){
        this.ormRepo = AppDataSource.getRepository(Rent)
    }

    save = async (rent: Partial<Rent>) => {
        return await this.ormRepo.save(rent)
    }

    all = async () =>{
        return await this.ormRepo.find()
    } 

    find = async (payload: object) => {
        return await this.ormRepo.find({...payload})
    }

    update = async (rentId: string, payload: Partial<Rent>) => {
        return await this.ormRepo.update(rentId, {...payload})    
    }

    delete = async (rentId: string) => {
        return await this.ormRepo.delete(rentId)
    }
}

export default new RentRepo;