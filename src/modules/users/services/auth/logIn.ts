import { BcryptAdapter } from "../../../../shared/utils/cryptography/bcrypt-adapter";
import { AppError } from "../../../../shared/utils/errors/AppError";
import { ISignInDTO } from "../../dtos/SignInDto";
import { DbUserRepository } from "../../../../Infrastructure/DB/mongodb/repositories/User/DbUserRepository";
import { IFindByemail } from "../../../../Infrastructure/DB/mongodb/repositories/User/IFindByEmail";



// export class SignInService {
//     // ==========> sign up create new user <==============
//     constructor(private userRepo: IFindByemail
// ) { 
//             this.userRepo= userRepo
//         }
//         async createUser(data: ISignInDTO) {
//             const { email,password}= data;
//             const emailExists = await this.userRepo.findByEmail(email);
//             if (!emailExists) throw new AppError("Email not exists", 409);
//             const bcrypt = new BcryptAdapter(Number(process.env.SALT_ROUNDES))
//             const compare =await bcrypt.compare(password,emailExists.password)
//         }
    
// }