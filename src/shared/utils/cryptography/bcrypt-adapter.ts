import { IComparer } from "./IComparer";
import { IHasher } from "./IHasher";

import bcrypt from 'bcrypt'



export class BcryptAdapter implements IHasher,IComparer {
    constructor(private readonly salt: number) {
        this.salt=salt
    }

    async hash (plainText:string): Promise<string>{
        return bcrypt.hash(plainText,this.salt)
    }
    async compare(plaintext: string, digest:string) {
        return bcrypt.compare(plaintext,digest)
    }
}