import Form from '../infra/typeorm/entities/Form';
import ICreateFormDto from "../dto/ICreateFormDto";

export default interface IFormsRepository{
  create(formData: ICreateFormDto) : Promise<Form>;
  findByName(name: string): Promise<Form | undefined>;
  findAll(): Promise<Form[]>;
  save(form: Form) : Promise<Form>;
}