import { 
   Entity,
   Column,
   PrimaryGeneratedColumn, 
   CreateDateColumn, 
   UpdateDateColumn,
   ManyToOne,
   JoinColumn } from 'typeorm'
   
import Tag from '@modules/tags/infra/typeorm/entities/Tag';
import Client from '@modules/clients/infra/typeorm/entities/Client';

@Entity('forms')
class Form{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  tag_id: string;

  @ManyToOne(() => Tag)
  @JoinColumn({name: 'tag_id'})
  tags: Tag[];


  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Form;