import { inject, injectable } from 'tsyringe';
import Form from '../infra/typeorm/entities/Form';
import IFormsRepository from '@modules/forms/repositories/IFormsRepository';
import AppError from '@shared/infra/http/errors/AppErro';


interface Request {
  name: string;
  tag_id: string;
}

@injectable()
class  CreateFormsService {
  constructor(
    @inject('FormsRepository')
    private formsRepository: IFormsRepository) {}

  public async execute({ name, tag_id }: Request) : Promise<Form> {

    const formExists = await this.formsRepository.findByName(name);
    
    if(formExists){
      throw new AppError('This form name is already exists!');
    }
  
    const form = await this.formsRepository.create({name, tag_id});
    return form;
  }
}

export default CreateFormsService;