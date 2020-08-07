import { container } from 'tsyringe';
import { Request, Response } from 'express';
import AuthenticateClientService from '@modules/clients/services/AuthenticateClientService';

export default class Sessioncontroller {
  public async create(request: Request, response: Response): Promise<Response>{
    const { email, password } = request.body;
    const authenticateClient = container.resolve(AuthenticateClientService);
  
    const { client, token } = await authenticateClient.execute({
      email,
      password
    });
  
    delete client.password;
    return response.json({ client, token });
  }
}