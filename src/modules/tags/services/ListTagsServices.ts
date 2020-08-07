import Tag from '../infra/typeorm/entities/Tag';
import { injectable, inject } from 'tsyringe';
import ITagsRepository from '../repositories/ITagsRepository';

@injectable()
class ListTagsService {
  constructor(
    @inject('TagsRepository')
    private tagsRepository: ITagsRepository) {}

  public async execute() : Promise<Tag[]> {
    const tags = await this.tagsRepository.findAll();
    return tags;
  }
}

export default ListTagsService;