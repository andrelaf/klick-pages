import { 
   Entity,
   Column,
   PrimaryGeneratedColumn, 
   CreateDateColumn, 
   UpdateDateColumn,
   ManyToOne,
   JoinColumn } from 'typeorm'
   
import Tag from '@modules/tags/infra/typeorm/entities/Tag';

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
  tag: Tag;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Form;