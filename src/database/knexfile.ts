import type { Knex } from 'knex'

import { DB_CONFIG } from './connection.config'

const config: { [key: string]: Knex.Config } = {
  development: DB_CONFIG
}

export default config
