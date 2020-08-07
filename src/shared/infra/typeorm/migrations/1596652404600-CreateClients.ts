import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateClients1596652404600 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'clients',
          columns: [
            { 
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            { 
              name: 'name',
              type: 'varchar'
            },
            { 
              name: 'email',
              type: 'varchar',
              isUnique: true
            },
            { 
              name: 'password',
              type: 'varchar'
            },
            { 
              name: 'form_id',
              type: 'uuid',
              isNullable: true
            },
            { 
              name: 'created_at',
              type: 'timestamp',
              default: 'now()'
            },
            { 
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()'
            },
          ]
        })
      );

      await queryRunner.clearSqlMemory();
      await queryRunner.createForeignKey('clients', new TableForeignKey({
        name: 'ClientForm',
        columnNames: ['form_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'forms',
        onDelete:'SET NULL',
        onUpdate:'CASCADE' 
      }),);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('clients');
    }
}
