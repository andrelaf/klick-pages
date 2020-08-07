import {MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateForms1596650863866 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'forms',
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
              name: 'tag_id',
              type: 'uuid',
              isNullable: false
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

      await queryRunner.createForeignKey('forms', new TableForeignKey({
        name: 'FormTag',
        columnNames: ['tag_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tags',
        onDelete:'RESTRICT',
        onUpdate:'CASCADE' 
      }),);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('forms');
    }

}
