import Client from '../infra/typeorm/entities/Client';
import ICreatClientDto from "../dto/ICreateClientDto";

export default interface IClientsRepository{
  findByid(id: string): Promise<Client | undefined>
  findByEmail(email: string): Promise<Client | undefined>
  findAllPaginated(page: number, limit: number): Promise<Client[]>
  create(data: ICreatClientDto) : Promise<Client>;
  save(client: Client) : Promise<Client>;
  count() : Promise<number>;
}