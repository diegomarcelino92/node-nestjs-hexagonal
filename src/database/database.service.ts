import { Injectable } from '@nestjs/common'

import { Knex } from 'knex'
import { InjectModel } from 'nest-knexjs'

import * as tables from './database.tables'

@Injectable()
export class DatabaseService {
  table: typeof tables
  query: Knex

  users: Knex.QueryBuilder
  usersGenres: Knex.QueryBuilder

  constructor(@InjectModel() private readonly knex: Knex) {
    this.query = this.knex
    this.table = tables
    this.users = this.knex(this.table.users)
    this.usersGenres = this.knex(this.table.users)
  }
}
