import { Injectable } from '@nestjs/common'

import { Knex } from 'knex'
import { InjectModel } from 'nest-knexjs'

import * as tables from './tables'

@Injectable()
export class DatabaseService {
  table: typeof tables
  query: Knex
  readonly genres: Knex.QueryBuilder<tables.GenresTable>
  readonly users: Knex.QueryBuilder<tables.UsersTable>
  readonly usersGenres: Knex.QueryBuilder<tables.UsersGenresTable>

  constructor(@InjectModel() private readonly knex: Knex) {
    this.query = this.knex
    this.table = tables

    Object.entries(this.table).forEach(([key, tableName]) => {
      this[key] = this.knex(tableName)
    })
  }
}
