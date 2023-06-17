import { Knex } from 'knex'
import { USER_TABLE } from './20230610151959_User'
import { GENRES_TABLE } from './20230617135920_Genres'

const USER_GENRES_TABLE = 'user_genres'
export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(USER_GENRES_TABLE, (t) => {
    t.increments('id').primary()
    t.string('user_id').references(USER_TABLE)
    t.string('genre_id').references(GENRES_TABLE)
    t.timestamp('created_at').defaultTo(knex.fn.now())
    t.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(USER_GENRES_TABLE)
}
