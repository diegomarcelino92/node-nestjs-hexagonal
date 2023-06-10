import { default as KN, Knex } from 'knex'

import { Model, knexSnakeCaseMappers } from 'objection'

export const DB_CONFIG: Knex.Config = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    database: 'nestjs',
    user: 'admin',
    password: 'admin'
  },
  pool: {
    min: 2,
    max: 7
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}

export const knexFactory = () => {
  const knex = KN({
    ...DB_CONFIG,
    debug: process.env.KNEX_DEBUG === 'true',
    ...knexSnakeCaseMappers()
  })
  Model.knex(knex)
  return knex
}
