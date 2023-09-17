import { Injectable } from '@nestjs/common'

import { Knex } from 'knex'
import { InjectModel } from 'nest-knexjs'

import * as tables from './database.tables'

@Injectable()
export class DatabaseService {
  table: typeof tables
  query: Knex
  readonly genres: Knex.QueryBuilder
  readonly users: Knex.QueryBuilder
  readonly usersGenres: Knex.QueryBuilder

  constructor(@InjectModel() private readonly knex: Knex) {
    this.query = this.knex
    this.table = tables

    Object.entries(this.table).forEach(([key, tableName]) => {
      this[key] = this.knex(tableName)
    })
  }
}
