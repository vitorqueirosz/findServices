import Knex from 'knex';

export async function up(knex: Knex){
   return knex.schema.createTable('users', (table) => {

        table.increments('id').primary();

        table.string('name').notNullable();
        table.string('idade').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('hashPassword').nullable();
        table.string('profissao').notNullable();
        table.string('whatsapp').notNullable();

   })
};

export async function down(knex: Knex) {
    return  knex.schema.dropTable('users');
};