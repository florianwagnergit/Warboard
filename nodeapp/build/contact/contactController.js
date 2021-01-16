"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    host: "wagner-wds.de",
    port: 587,
    secure: false,
    auth: {
        user: 'noreply@wagner-wds.de',
        pass: 'z2Gd5wBVgy9s9Sr!'
    },
    tls: {
        rejectUnauthorized: false
    }
});
exports.emailHandler = (body) => {
    return new Promise((res, rej) => {
        const mail = {
            from: 'noreply@wagner-wds.de',
            to: 'fwagner85051@gmail.com; ',
            subject: '',
            text: ''
        };
        mail.subject = body.subject;
        if (body.copy === true) {
            mail.text = 'Sehr geehrter Herr ' + body.name + ', \n \nvielen Dank für Ihre Nachricht. Wir kümmern uns in Kürze um ihr Anliegen.\n\nIhre Nachricht:\n\n' + 'E-Mail:\n\n' + body.email + body.message;
            mail.to += body.email;
        }
        else {
            mail.text = 'Anfrage von: ' + body.name + '\nEmail: ' + body.email + '\nKopie: ' + body.copy + '\nNachricht: \n' + body.message;
        }
        transporter.sendMail(mail, (err, info) => {
            if (err) {
                rej(500);
            }
            else {
                res(200);
            }
        });
    });
};
