import { Types } from "mongoose"

// define the IUserMeta interface
export interface IUserMeta {
    _id: Types.ObjectId
    createdAt: Date
    updatedAt: Date
}