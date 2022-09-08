import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'd68de922f4350a',
    pass: 'f31fb4de0f26fb',
  },
});

export class NodemailerAdapater implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedback Widget <oi@feedbackwidget.com>',
      to: 'Thiago Silva <thiagodeveloper89@gmail.com>',
      subject,
      html: body,
    });
  }
}

/*
[
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário do feedback: ${comment}</p>`,
      `</div>`,
    ].join('')
*/
