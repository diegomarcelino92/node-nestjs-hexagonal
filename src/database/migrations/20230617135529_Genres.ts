import { Knex } from 'knex'
import { genres } from '../tables'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(genres, (t) => {
    t.increments('id').primary()
    t.string('name', 50)
    t.string('description', 255)
    t.timestamp('created_at').defaultTo(knex.fn.now())
    t.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(genres)
}
