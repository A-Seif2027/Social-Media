import {genderType} from "../../enums/genderType";

// Define the IUserCore interface
export interface IUserCore {
    fName: string
    lName: string
    userName?: string
    email: string
    age: number
    gender: genderType
}