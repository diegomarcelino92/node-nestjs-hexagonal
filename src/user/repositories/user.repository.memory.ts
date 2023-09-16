import { Injectable } from '@nestjs/common'

import { Result } from 'src/common/result-handler'
import { IUserData } from '../entities/user.entity.interfaces'
import { IUserRepository } from './user.repository.interfaces'

@Injectable()
export class UserRepositoryInMemory implements IUserRepository {
  list: IUserData[] = []

  _increment = 0
  get autoIncrementId(): number {
    return this._increment++
  }

  createUser(user) {
    user.id = this.autoIncrementId
    this.list.push(user)
    return Promise.resolve(Result.ok('created'))
  }

  listUsers() {
    return Promise.resolve(Result.ok(this.list))
  }
}
