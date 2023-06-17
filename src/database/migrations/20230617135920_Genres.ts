import { Knex } from 'knex'

export const GENRES_TABLE = 'genres'
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(GENRES_TABLE, (t) => {
    t.increments('id').primary()
    t.string('name')
    t.text('description')
    t.timestamp('created_at').defaultTo(knex.fn.now())
    t.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(GENRES_TABLE)
}
