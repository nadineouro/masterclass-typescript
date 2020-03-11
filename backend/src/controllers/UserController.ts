import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'Nadine', email: 'nadine.meyer.ouro@gmail.com' },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendEmail({
      to: { 
        name: 'Nadine Meyer Ouro', 
        email: 'nadine.meyer.ouro@gmail.com'
      }, 
      message: { 
        subject: 'Bem-vindo ao sistema', 
        body: 'Seja bem-vindo!' 
      }
    });
    return res.send();
  }
};