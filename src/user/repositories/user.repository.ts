import { Inject, Injectable } from '@nestjs/common'

import { Result } from 'src/common/result-handler'

import { DatabaseService } from 'src/database/database.service'
import { UserEntity } from '../entities/user.entity'
import { IUserRepository } from './user.repository.interfaces'
import {
  UserGenreOutboundModel,
  UserOutboundModel
} from './user.repository.models'

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @Inject(DatabaseService)
    private readonly db: DatabaseService
  ) {}

  async createUser(user) {
    const userModel = UserOutboundModel.create(user)

    try {
      await this.db.query.transaction(async (trx) => {
        const [{ id }] = await this.db.users
          .insert(userModel, 'id')
          .transacting(trx)

        const userGenreModel = user.genres.map((gid) =>
          UserGenreOutboundModel.create(gid, id)
        )

        await this.db.usersGenres.insert(userGenreModel).transacting(trx)
      })
      return Result.ok('created')
    } catch (error) {
      console.log(error)
      return Result.fail(error)
    }
  }

  async listUsers() {
    try {
      const usersModels = []
      const usersEntities = []

      for (const user of usersModels) {
        const genres = []
        usersEntities.push(UserEntity.create({ ...user, genres }))
      }

      return Result.ok(usersEntities)
    } catch (error) {
      return Result.fail(error)
    }
  }
}
