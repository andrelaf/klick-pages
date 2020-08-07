
import { compare} from 'bcryptjs'
import { sign } from 'jsonwebtoken';
import { injectable, inject } from 'tsyringe';
import authConfig from '@config/auth';

import Client from '../infra/typeorm/entities/Client';
import IClientsRepository from "../repositories/IClientsRepository";
import AppError from '@shared/infra/http/errors/AppErro';


interface Request{
  email: string;
  password: string;
}

interface Response{
  client: Client
  token: string
}

@injectable()
class AuthenticateClienteService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository) {}
  
  public async execute({email, password} : Request) : Promise<Response> {

    const client = await this.clientsRepository.findByEmail(email);

    if(!client){
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const passwordMatched = await compare(password, client.password);
    if(!passwordMatched){
      throw new AppError('Incorrect email/password combination.', 401);
    }

    const {secret, expiresIn } = authConfig.jwt; 

    const token = sign({}, secret, {
      subject: client.id,
      expiresIn
    });

    return {
      client,
      token,
    };
  }

}
export default AuthenticateClienteService;
