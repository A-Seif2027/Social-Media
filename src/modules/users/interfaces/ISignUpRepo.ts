import * as UR from "../../../Infrastructure/DB/mongodb/repositories/User";

export interface ISignUpRepo extends UR.IFindByemail, UR.ICreateRepository { }

