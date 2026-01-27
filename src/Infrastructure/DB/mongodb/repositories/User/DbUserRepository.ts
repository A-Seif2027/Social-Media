import { HydratedDocument, Model } from "mongoose";
import {ICreateRepository } from "./Icreate";
import { IFindById } from "./IFindById";
import { IFindByemail } from "./IFindByEmail";
import { IUser } from "../../../models/user.model";

export class DbUserRepository implements ICreateRepository, IFindByemail, IFindById {
    constructor(private readonly model: Model<IUser>) { }

    async create(data: ICreateRepository.Params): Promise<ICreateRepository.Result> {
        const doc = new this.model(data); 
        return await doc.save();
        

    }
    async findById(id: IFindById.Params): Promise<IFindById.Result> {
        return await this.model.findById(id);
    }

    async findByEmail(email: string): Promise<IFindByemail.Result> {
        return await this.model.findOne({email});
        
    }
}
