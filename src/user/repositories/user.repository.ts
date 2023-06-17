import { Injectable } from '@nestjs/common'
import { Knex } from 'knex'
import { InjectModel } from 'nest-knexjs'

import { Result } from 'src/common/result-handler'

import { UserEntity } from '../entities/user.entity'
import {
  IUserOutboundModel,
  IUserRepository
} from './user.repository.interfaces'

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectModel()
    private readonly knex: Knex
  ) {}

  async createUser(user: UserEntity) {
    try {
      await this.knex.table<IUserOutboundModel>('users').insert({
        name: user.raw.firstname,
        surname: user.raw.surname,
        birthdate: user.raw.birthdate
      })

      return Result.ok('created')
    } catch (error) {
      return Result.fail(error)
    }
  }

  async listUsers() {
    try {
      const usersModels = await this.listUsersQuery()
      const usersEntities = []

      for (const user of usersModels) {
        const genres = await this.listGenresQuery(user.id)
        usersEntities.push(UserEntity.create({ ...user, genres }))
      }

      return Result.ok(usersEntities)
    } catch (error) {
      return Result.fail(error)
    }
  }

  private listUsersQuery() {
    return this.knex(IUserOutboundModel.tb).select(
      'id',
      'name as firstname',
      'surname',
      'birthdate'
    )
  }

  private listGenresQuery(userId: string) {
    return this.knex(IUserOutboundModel.tb_genres)
      .select('id')
      .where(IUserOutboundModel.tb_genres_fk, userId)
  }
}
