import express from 'express';
import nodemailer from 'nodemailer';
import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedback-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router();

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'd68de922f4350a',
    pass: 'f31fb4de0f26fb',
  },
});

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbackRepository = new PrismaFeedbackRepository();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbackRepository);

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  /* await transport.sendMail({
    from: 'Equipe Feedback Widget <oi@feedbackwidget.com>',
    to: 'Thiago Silva <thiagodeveloper89@gmail.com>',
    subject: 'Novo feedback',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário do feedback: ${comment}</p>`,
      `</div>`,
    ].join(''),
  }); */

  return res.status(201).send();
});
