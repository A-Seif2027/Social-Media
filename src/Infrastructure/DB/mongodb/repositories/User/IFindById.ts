import { IUser } from "../../../models/user.model"

export interface IFindById {
    findById: (account: IFindById.Params) => Promise<IFindById.Result>
}

export namespace IFindById {
    export type Params = {id: string}
    export type Result = IUser | null
}
