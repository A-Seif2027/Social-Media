import nodemailer from "nodemailer";
import { IEmailService } from "./IEmailService";


export class NodemailerService implements IEmailService {
    private transporter;
    constructor() {

        this.transporter = nodemailer.createTransport({
            service: "gmail",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL as string,
                pass: process.env.PASSWORD as string,
            },
        });
    }

    async sendEmail(to: string, subject: string, html: string): Promise<void> {
        const info = await this.transporter.sendMail({
            from: `"socialmediaApp" ${ process.env.EMAIL as string }`,
            to,
            subject,
            html
        });
}

    async generateOTP(): Promise < number > {
    return Math.floor(Math.random() * 1000000);
}
}