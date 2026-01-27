import { EventEmitter } from "events";
import { IEmailService } from "./IEmailService";

export class EmailEventBus {
    private emitter = new EventEmitter();

    constructor(private emailService: IEmailService) {
        this.emitter.on("confirmEmail", async (data) => {
            const otp = await this.emailService.generateOTP();
            await this.emailService.sendEmail(data.email, "Confirm Email", `Your OTP is ${otp}`);
        });
    }

    emit(event: string, payload: any) {
        this.emitter.emit(event, payload);
    }
}
