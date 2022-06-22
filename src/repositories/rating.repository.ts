import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Rating } from "../entities/Rating";

interface IRatingRepo {
  save: (rating: Partial<Rating>) => Promise<Rating>;
  all: () => Promise<Rating[]>;
  findOne: (payload: object) => Promise<Rating>;
  update: (id: string, payload: Partial<Rating>) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}

class RatingRepo implements IRatingRepo {
  private ormRepo: Repository<Rating>;

  constructor() {
    this.ormRepo = AppDataSource.getRepository(Rating);
  }

  save = async (rating: Partial<Rating>) => {
    return await this.ormRepo.save(rating);
  };

  all = async () => {
    return await this.ormRepo.find();
  };

  findOne = async (payload: object) => {
    return await this.ormRepo.findOneBy({ ...payload });
  };

  update = async (ratingId: string, payload: Partial<Rating>) => {
    return await this.ormRepo.update(ratingId, { ...payload });
  };

  delete = async (id: string) => {
    return await this.ormRepo.delete(id);
  };
}

export default new RatingRepo();
