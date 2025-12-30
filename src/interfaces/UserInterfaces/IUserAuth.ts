import {roleType} from "../../enums/roleType";

// define the IUserAuth interface
export interface IUserAuth {
    password: string
    role: roleType
}