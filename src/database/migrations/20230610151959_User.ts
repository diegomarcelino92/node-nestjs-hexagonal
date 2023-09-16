import { Knex } from 'knex'
import { users } from '../database.tables'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(users, (t) => {
    t.increments('id').primary()
    t.text('name')
    t.text('surname')
    t.dateTime('birthdate')
    t.timestamp('created_at').defaultTo(knex.fn.now())
    t.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(users)
}
