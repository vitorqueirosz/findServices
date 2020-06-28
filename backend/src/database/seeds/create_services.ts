import Knex from 'knex';


export async function seed(knex: Knex) {
    await knex('services').insert([
        {title: 'Limpeza', image: 'limpeza.svg'},
        {title: 'Construção', image: 'construcao.svg'},
        {title: 'Informática', image: 'informatica.svg'},
        {title: 'Lavagem', image: 'lavagem.svg'},
        {title: 'Automóveis', image: 'automoveis.svg'},
        {title: 'Ensino', image: 'ensino.svg'},
    ]);
};