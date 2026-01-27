import { type NextFunction, Request, Response } from "express";
import { makeSignUpService } from "../../factory/signUpFactory";


// Handle HTTP Req/Res
export class SignUpController {
    private userService = makeSignUpService();

    handle = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = await this.userService.createUser(req.body);
            res.status(201).json(user);
        } catch (err) {
            next(err);

        }
    };
}
