import {  getRepository, Repository } from 'typeorm'
import ICreateTagDto from '@modules/tags/dto/ICreateTagDto';
import ITagsRepository from '@modules/tags/repositories/ITagsRepository';
import Tag from '@modules/tags/infra/typeorm/entities/Tag';

class TagRepository implements ITagsRepository {
  private ormRepository: Repository<Tag>;

  constructor() {
    this.ormRepository = getRepository(Tag);
  }
  public async findAll(): Promise<Tag[]> {
    const tags = await this.ormRepository.find();
    return tags;
  }

  public async findByName(name: string): Promise<Tag | undefined> {
    const form = await this.ormRepository.findOne({
      where: { name }
    });
    return form;
  }
  
  public async create(tagData: ICreateTagDto): Promise<Tag> {
    const tag = await this.ormRepository.create(tagData);
    await this.ormRepository.save(tag);
    return tag;
  }

  public async save(tag: Tag): Promise<Tag> {
    return this.ormRepository.save(tag);
  }

}

export default TagRepository;