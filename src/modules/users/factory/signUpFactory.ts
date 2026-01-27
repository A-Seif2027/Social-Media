import { userModel } from "../../../Infrastructure/DB/models/user.model";
import { DbUserRepository } from "../../../Infrastructure/DB/mongodb/repositories/User";
import { EmailEventBus } from "../../../Infrastructure/email/emailEvents";
import { NodemailerService } from "../../../Infrastructure/email/nodeMailerService";
import { BcryptAdapter } from "../../../shared/utils/cryptography/bcrypt-adapter";
import { SignUpService } from "../services/auth/signUp";





export function makeSignUpService() {
    const repo = new DbUserRepository(userModel);
    const hasher = new BcryptAdapter(12);
    const emailService = new NodemailerService();
    const eventBus = new EmailEventBus(emailService)
    return new SignUpService(repo, hasher, eventBus);
}