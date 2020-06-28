import Knex from 'knex';


export async function up(knex: Knex) {
    return knex.schema.createTable('types_services', (table) => {

        table.increments('id').primary();

        table.integer('type_service_id')
        .notNullable().references('id').inTable('typeServices');

        table.integer('services_id')
        .notNullable().references('id').inTable('services');

    });
};


export async function down(knex: Knex) {
    return knex.schema.dropTable('types_services');
}

