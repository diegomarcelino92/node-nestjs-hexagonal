import type { Knex as KN } from 'knex'
import { Knex } from 'knex'

export const DB_CONFIG: KN.Config = {
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

export const KNEX_CONFIG: { [key: string]: Knex.Config } = {
  development: DB_CONFIG
}

export default KNEX_CONFIG
