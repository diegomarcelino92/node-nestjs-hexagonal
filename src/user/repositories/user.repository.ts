import { Inject, Injectable } from '@nestjs/common'

import { Result } from 'src/common/result-handler'
import { UserEntity } from '../entities/user.entity'
import {
  IUserOutboundModel,
  IUserRepository,
  UserOutboundModel
} from './user.repository.interfaces'

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @Inject(UserOutboundModel.name)
    private readonly userModel: IUserOutboundModel
  ) {}

  async createUser(user: UserEntity) {
    try {
      await this.userModel.query().insert({
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
      const usersModel = await this.userModel.query()
      const users = usersModel.map((u) =>
        UserEntity.create({ ...u, firstname: u.name, genres: [] })
      )

      return Result.ok(users)
    } catch (error) {
      return Result.fail(error)
    }
  }
}
