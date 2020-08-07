import { container } from 'tsyringe';
import { Request, Response } from 'express';
import CreateClientsService from '@modules/clients/services/CreateClientsService';
import ListClientsService from '@modules/clients/services/ListClientsServices';
import IPaginationDto from '@shared/dto/IPaginationDto';

export default class Clientscontroller {
  
  public async create(request: Request, response: Response): Promise<Response>{
    const {name, email, password, form_id } = request.body;
    const createClient = container.resolve(CreateClientsService);
    const client = await createClient.execute({
      name, 
      email,
      password,
      form_id
    });
    
    return response.json(client);
  }

  public async list(request: Request, response: Response): Promise<Response>{
    const { page, limit }  = request.query;
    const paginationDto: IPaginationDto = {
      page: Number(page),
      limit: Number(limit)  
    };

    const listClients = container.resolve(ListClientsService);
    const clientsPaginated  = await listClients.execute(
      {
        ...paginationDto,
        limit: paginationDto.limit > 10 ? 10 : paginationDto.limit
      }
    );
    return response.json(clientsPaginated);
  }
}