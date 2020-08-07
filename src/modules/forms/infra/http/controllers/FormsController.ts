import { container } from 'tsyringe';
import { Request, Response } from 'express';
import CreateFormsService from '@modules/forms/services/CreateFormsService';
import ListFormsService from '@modules/forms/services/ListFormsService';


export default class Formscontroller {
  public async create(request: Request, response: Response): Promise<Response>{
    const {name, tag_id} = request.body;
    const createForm = container.resolve(CreateFormsService);
    const form = await createForm.execute({
      name,
      tag_id
    });
    
    delete form.updated_at;
    return response.json(form);
  }

  public async list(request: Request, response: Response): Promise<Response>{
    
    const listForms = container.resolve(ListFormsService);
    const tags = await listForms.execute();
    return response.json(tags);
  }
}