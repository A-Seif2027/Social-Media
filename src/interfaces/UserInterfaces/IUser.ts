
import { IUserCore } from "./IUserCore"
import { IUserAuth } from "./IUserAuth"
import { IUserContact } from "./IUserContact"
import { IUserMeta } from "./IUserMeta"

export type IUser = IUserCore & IUserAuth & IUserContact & IUserMeta
