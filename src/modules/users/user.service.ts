import { NextFunction, Request, Response } from "express";
import { AppError } from "../../utils/classError";
import { userModel } from "../../DB/models/user.model";
import { ISignUp } from "../../DTOS/userDtos/ISignUp";



class UserService {
    // ==========> sign up create new user <================
    signUp = async (req: Request, res: Response, next: NextFunction) => {
        const { fName, lName, email, password, cPassword, age, phone, address, gender, role }: ISignUp = req.body

        const user = await userModel.create({ fName, lName, email, password, cPassword, 
            age, phone, address, gender, role })
        return res.status(201).json({ message: "success", body: req.body });

    }

    // ==========> sign in <================
    signIn = (req: Request, res: Response, next: NextFunction) => {
        return res.status(201).json({ message: "success" })
    }
}

export default new UserService