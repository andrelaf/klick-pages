
import { injectable, inject } from 'tsyringe';

import { hash } from 'bcryptjs';
import Client from '../infra/typeorm/entities/Client';
import IClientsRepository from '../repositories/IClientsRepository';
import AppError from '@shared/infra/http/errors/AppErro';

interface Request{
  name: string;
  email: string;
  password: string;
  form_id: string;
}

@injectable()
class  CreateClientsService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository) {}

  public async execute({name, email, password, form_id} : Request) : Promise<Client> {
    const checkClientExists = await this.clientsRepository.findByEmail(email);

    if(checkClientExists){
      throw new AppError('Email addrees already used.')
    }

    const hashedPassword = await hash(password, 8);
    const client = await this.clientsRepository.create({
      name,
      email,
      password: hashedPassword,
      form_id
    });

    return client;
  }
}

export default CreateClientsService;