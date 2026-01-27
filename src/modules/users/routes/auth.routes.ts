import { Router } from "express";
import * as MD from "../../../shared/middleware/Validation";
import * as UV from "../validation/auth.validation";
import { SignUpController } from "../controller/auth/signUp";

const userRouter = Router()
const signUpController = new SignUpController()
userRouter.post("/signUp", MD.Validation(UV.signUpSchema), signUpController.handle)

export default userRouter 


