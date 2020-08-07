import {  getRepository, Repository } from 'typeorm';

import Client from '../entities/Client';
import IClientsRepository from '@modules/clients/repositories/IClientsRepository';
import ICreateClientDto from '@modules/clients/dto/ICreateClientDto';
import Form from '@modules/forms/infra/typeorm/entities/Form';

class ClientsRepository implements IClientsRepository {
  private ormRepository: Repository<Client>;

  constructor() {
    this.ormRepository = getRepository(Client);
  }

  public async count(): Promise<number> {
    const totalClients = await this.ormRepository.count()
    return totalClients;
  }
  
  public async findAllPaginated(page: number, limit: number): Promise<Client[]> {
    const skippedItems = (page - 1) * limit;
    const clients = await this.ormRepository
      .createQueryBuilder("client")
      .select(["client.id", "client.name", "client.email", "client.created_at"])
      .leftJoinAndSelect("client.forms", "form")
      .leftJoinAndSelect("form.tags", "tag" )
      .orderBy('client.created_at', "DESC")
      .skip(skippedItems)
      .take(limit)
      .getMany()

    return clients; 
  }

  public async findByid(id: string): Promise<Client | undefined> {
    const clients = await this.ormRepository.findOne(id);
    return clients;
  }

  public async findByEmail(email: string): Promise<Client | undefined> {
    const clients = await this.ormRepository.findOne({
      where: { email }
    });
    return clients;
  }


  public async create(clientData: ICreateClientDto): Promise<Client> {
    
    const client = await this.ormRepository.create(clientData);

    await this.ormRepository.save(client);

    return client;
  }

  public async save(client: Client): Promise<Client> {
    return this.ormRepository.save(client);
  }

}

export default ClientsRepository;