import {  getRepository, Repository } from 'typeorm';

import Form from '../entities/Form';
import ICreateformDto from '@modules/forms/dto/ICreateFormDto';
import IFormsRepository from '@modules/forms/repositories/IFormsRepository';

class FormsRepository implements IFormsRepository {
  private ormRepository: Repository<Form>;

  constructor() {
    this.ormRepository = getRepository(Form);
  }

  public async findByName(name: string): Promise<Form | undefined> {
    const form = await this.ormRepository.findOne({
      where: { name }
    });

    return form;
  }
  
  public async create(formData: ICreateformDto): Promise<Form> {
    
    const form = await this.ormRepository.create(formData);

    await this.ormRepository.save(form);

    return form;
  }

  public async save(form: Form): Promise<Form> {
    return this.ormRepository.save(form);
  }

  public async findAll() : Promise<Form[]> {
    const forms = await this.ormRepository.find();
    return forms;
  }

}

export default FormsRepository;