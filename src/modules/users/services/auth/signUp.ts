import { EmailEventBus } from "../../../../Infrastructure/email/emailEvents";
import { IHasher } from "../../../../shared/utils/cryptography/IHasher";
import { AppError } from "../../../../shared/utils/errors/AppError";
import {ISignUpDtoReq } from "../../dtos/request/SignUpDtoReq";
import { ISignUpDtoRes } from "../../dtos/response/SignUpDtoRes";
import { ISignUpRepo } from "../../interfaces/ISignUpRepo";

export class SignUpService {

    constructor(
        private repo: ISignUpRepo,
        private hasher: IHasher,
        private eventBus: EmailEventBus) {}

    async createUser(data: ISignUpDtoReq): Promise<ISignUpDtoRes> {
        const { fName, lName, email, password, age, phone, address, gender, role } = data;
        const emailExists = await this.repo.findByEmail(email);
        if (emailExists) {
            throw new AppError("email already exist", 409)
        }

        const hash = await this.hasher.hash(password)
        const user = await this.repo.create({ fName, lName, email, password: hash, age, phone, address, gender, role });
        this.eventBus.emit("confirmEmail", user)
        return {
            _id: user._id as unknown as string,
            fName: user.fName,
            lName: user.lName,
            email: user.email,
            age: user.age,
            phone: user.phone,
            address: user.address,
            gender: user.gender,
            role: user.role,
            createdAt: user.createdAt
        };


    }
}