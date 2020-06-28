import Knex from 'knex';


export async function up(knex: Knex) {
    return knex.schema.createTable('users_services', (table) => {

        table.increments('id').primary();


        table.integer('users_id').notNullable().references('id').inTable('users');

        table.integer('types_id').notNullable().references('id').inTable('typeServices');

    })
};

export async function down(knex: Knex){
    return knex.schema.dropTable('users_services')
};