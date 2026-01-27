export interface IFindByemail {
    findByEmail: (email: string) => Promise<IFindByemail.Result>
}

export namespace IFindByemail {
    export type Result = boolean | null
}
