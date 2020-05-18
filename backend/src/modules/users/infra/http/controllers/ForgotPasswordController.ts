import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SendForgotPasswordMailService from '@modules/users/services/SendForgotPasswordMailService';

export default class ForgotPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sendForgotPasswordMail = container.resolve(
      SendForgotPasswordMailService,
    );

    await sendForgotPasswordMail.execute({ email });

    return response.status(204).json();
  }
}
