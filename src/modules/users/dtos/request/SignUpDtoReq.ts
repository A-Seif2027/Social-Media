import * as EN from "../../../../shared/enums/index";

export interface ISignUpDtoReq {
    fName: string,
    lName: string,
    email: string,
    password: string,
    age: number,
    phone: string,
    address: string,
    gender: EN.genderType,
    role: EN.roleType
}