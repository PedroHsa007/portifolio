import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Create transporter for sending emails
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Endpoint to notify when someone visits the portfolio
app.get('/notify', async (req, res) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.VITE_EMAIL_RECEIVER,
      subject: 'Alguém visitou seu portfólio!',
      text: 'Alguém acabou de visitar seu portfólio!',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5; border-radius: 10px;">
          <h2 style="color: #4a5568;">Nova Visita ao Portfólio</h2>
          <p style="font-size: 16px; color: #4a5568;">Olá Pedro,</p>
          <p style="font-size: 16px; color: #4a5568;">Alguém acabou de visitar seu portfólio profissional!</p>
          <p style="font-size: 16px; color: #4a5568;">Data e hora: ${new Date().toLocaleString('pt-BR')}</p>
          <hr style="border: 1px solid #e2e8f0; margin: 20px 0;">
          <p style="font-size: 14px; color: #718096;">Esta é uma notificação automática do seu sistema de portfólio.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Notification email sent successfully' });
  } catch (error) {
    console.error('Error sending notification email:', error);
    res.status(500).json({ success: false, message: 'Failed to send notification email' });
  }
});

// Endpoint to handle contact form submissions
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.VITE_EMAIL_RECEIVER,
      subject: `Contato do Portfólio: ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5; border-radius: 10px;">
          <h2 style="color: #4a5568;">Nova Mensagem de Contato</h2>
          <p style="font-size: 16px; color: #4a5568;"><strong>Nome:</strong> ${name}</p>
          <p style="font-size: 16px; color: #4a5568;"><strong>Email:</strong> ${email}</p>
          <p style="font-size: 16px; color: #4a5568;"><strong>Mensagem:</strong></p>
          <div style="padding: 15px; background-color: white; border-radius: 5px; margin-top: 10px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <hr style="border: 1px solid #e2e8f0; margin: 20px 0;">
          <p style="font-size: 14px; color: #718096;">Esta mensagem foi enviada através do formulário de contato do seu portfólio.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending contact email:', error);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});