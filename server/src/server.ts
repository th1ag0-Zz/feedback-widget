import express from 'express';
import { prisma } from './prisma';
import nodemailer from 'nodemailer';

const app = express();
app.use(express.json());

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'd68de922f4350a',
    pass: 'f31fb4de0f26fb',
  },
});

app.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  await transport.sendMail({
    from: 'Equipe Feedback Widget <oi@feedbackwidget.com>',
    to: 'Thiago Silva <thiagodeveloper89@gmail.com>',
    subject: 'Novo feedback',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário do feedback: ${comment}</p>`,
      `</div>`,
    ].join(''),
  });

  return res.status(201).json({ data: feedback });
});

app.listen(3333, () => console.log('Servidor iniciado! 🚀'));
