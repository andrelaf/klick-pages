import Tag from '../infra/typeorm/entities/Tag';
import ICreateTagDto from "../dto/ICreateTagDto";

export default interface ITagsRepository{
  create(formData: ICreateTagDto) : Promise<Tag>;
  findByName(name: string): Promise<Tag | undefined>;
  findAll(): Promise<Tag[]>;
  save(tag: Tag) : Promise<Tag>;
}