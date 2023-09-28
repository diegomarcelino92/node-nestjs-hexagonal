import { Knex } from 'knex'

import { genres, users, usersGenres } from '../tables'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(usersGenres, (t) => {
    t.increments('id').primary()
    t.integer('user_id').unsigned()
    t.foreign('user_id').references('id').inTable(users).onDelete('cascade')
    t.integer('genre_id').unsigned()
    t.foreign('genre_id').references('id').inTable(genres).onDelete('cascade')
    t.timestamp('created_at').defaultTo(knex.fn.now())
    t.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(usersGenres)
}
