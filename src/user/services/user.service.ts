import { Inject, Injectable } from '@nestjs/common'

import { UserEntity } from '../entities/user.entity'
import { IUserRepository, USER_REPOSITORY } from '../repositories'

import { Result } from 'src/common/result-handler'
import { IUserInboundDTO, IUserService } from './user.service.interfaces'

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository
  ) {}

  async createUser(dto: IUserInboundDTO) {
    const userEntity = UserEntity.create(dto)
    return this.userRepository.createUser(userEntity)
  }

  async listUsers() {
    const result = await this.userRepository.listUsers()

    if (result.ok) {
      return Result.ok(this.mapToDto(result.value))
    } else {
      return Result.fail(result.error)
    }
  }

  private mapToDto(users: UserEntity[]) {
    return users.map((u) => u.raw)
  }
}
