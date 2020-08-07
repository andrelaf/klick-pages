import { 
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn } from 'typeorm'

import Form from '@modules/forms/infra/typeorm/entities/Form';

@Entity('clients')
class Client{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;
  
  @Column()
  password: string;

  @Column()
  form_id: string;

  @ManyToOne(() => Form)
  @JoinColumn({name: 'form_id'})
  forms: Form[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Client;