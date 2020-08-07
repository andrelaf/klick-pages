import Tag from '../infra/typeorm/entities/Tag';
import AppError from '@shared/infra/http/errors/AppErro';
import { inject, injectable } from 'tsyringe';
import ITagsRepository from '../repositories/ITagsRepository';


interface Request {
  name: string;
}

@injectable()
class  CreateTagsService {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository) {}

  public async execute({ name }: Request) : Promise<Tag> {
    const checkTagExists = await this.tagsRepository.findByName(name);

    if(checkTagExists){
      throw new AppError('This tag name exists!');
    }
  
    const tag = await this.tagsRepository.create({name});
    return tag;
  }
}

export default CreateTagsService;