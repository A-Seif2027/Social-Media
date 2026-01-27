import * as EN from "../../../../shared/enums/index";

export interface ISignUpDtoRes {
    _id: string,
    fName: string,
    lName: string,
    email: string,
    age: number,
    phone: string,
    address: string,
    gender: EN.genderType,
    role: EN.roleType,
    createdAt:Date
}