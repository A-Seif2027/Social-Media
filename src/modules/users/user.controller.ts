import { Router } from "express";
import US from "./user.service.js";
import * as MD from "../../middleware/Validation.js";
import * as UV from "./user.validation.js";
const userRouter= Router()

userRouter.post("/signUp", MD.Validation(UV.signUpSchema), US.signUp)
userRouter.post("/signIn", US.signIn)

export default userRouter