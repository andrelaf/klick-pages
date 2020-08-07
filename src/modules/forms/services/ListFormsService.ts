import Tag from '../infra/typeorm/entities/Form';
import { injectable, inject } from 'tsyringe';
import IFormsRepository from '../repositories/IFormsRepository';

@injectable()
class ListFormsService {
  constructor(
    @inject('FormsRepository')
    private formsRepository: IFormsRepository) {}

  public async execute() : Promise<Tag[]> {
    const forms = await this.formsRepository.findAll();
    return forms;
  }
}

export default ListFormsService;