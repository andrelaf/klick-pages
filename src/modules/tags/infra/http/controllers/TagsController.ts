import { container } from 'tsyringe';
import { Request, Response } from 'express';
import CreateTagsService from '@modules/tags/services/CreateTagsService';
import ListTagsService from '@modules/tags/services/ListTagsServices';


export default class Tagscontroller {
  
  public async create(request: Request, response: Response): Promise<Response>{
    const {name} = request.body;
    const createClient = container.resolve(CreateTagsService);
    const tag = await createClient.execute({
      name
    });

    delete tag.updated_at;
    return response.json(tag);
  }

  public async list(request: Request, response: Response): Promise<Response>{
    
    const listTags = container.resolve(ListTagsService);
    const tags = await listTags.execute();
    return response.json(tags);
  }
}