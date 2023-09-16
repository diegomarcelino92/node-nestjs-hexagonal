import { Inject, Injectable } from '@nestjs/common'

import { Result } from 'src/common/result-handler'
import { UserEntity } from '../entities/user.entity'
import { IUserRepository, USER_REPOSITORY } from '../repositories'

import { IUserData } from '../entities/user.entity.interfaces'
import { IUserService } from './user.service.interfaces'

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository
  ) {}

  async createUser(dto: IUserData) {
    const userEntity = UserEntity.create(dto)
    return this.userRepository.createUser(userEntity.raw)
  }

  async listUsers() {
    const result = await this.userRepository.listUsers()

    if (result.ok) {
      return Result.ok(result.value)
    } else {
      return Result.fail(result.error)
    }
  }
}
