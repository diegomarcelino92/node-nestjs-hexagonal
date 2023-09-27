import { Inject, Injectable } from '@nestjs/common'

import { Result } from 'src/common/result-handler'

import { DatabaseService } from 'src/database/database.service'
import { IUserRepository } from './user.repository.interfaces'
import {
  UserGenreOutboundModel,
  UserOutboundModelFactory
} from './user.repository.models'

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @Inject(DatabaseService)
    private readonly db: DatabaseService
  ) {}

  async createUser(user) {
    const userModel = UserOutboundModelFactory.toPersistence(user)

    try {
      await this.db.query.transaction(async (trx) => {
        const [{ id }] = await this.db.users
          .insert(userModel)
          .returning('id')
          .transacting(trx)

        const userGenreModel = user.genres.map((gid) =>
          UserGenreOutboundModel.toPersistence(gid, id)
        )

        await this.db.usersGenres.insert(userGenreModel).transacting(trx)
      })
      return Result.ok('created')
    } catch (error) {
      return Result.fail(error)
    }
  }

  async listUsers() {
    try {
      const userList = []
      const users = await this.db.users.select(
        'id',
        'name',
        'surname',
        'birthdate'
      )

      for (const user of users) {
        const genres = await this.listUserGenres(user.id)
        userList.push(UserOutboundModelFactory.toDto({ ...user, genres }))
      }

      return Result.ok(userList)
    } catch (error) {
      return Result.fail(error)
    }
  }

  private async listUserGenres(userId: string) {
    const userGenresTb = this.db.table.usersGenres
    const genresTb = this.db.table.genres

    const genres = await this.db.query
      .select('g.id', 'g.name', 'g.description')
      .from(`${userGenresTb} as ug`)
      .join(`${genresTb} as g`, 'ug.genre_id', 'g.id')
      .where({ user_id: userId })

    return genres
  }
}
