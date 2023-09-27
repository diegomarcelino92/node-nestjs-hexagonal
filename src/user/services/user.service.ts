import { Inject, Injectable } from '@nestjs/common'

import { IUserRepository, USER_REPOSITORY } from '../repositories'

import { UserEntity } from '../entities/user.entity'
import { IUserCreateDTO, IUserService } from './user.service.interfaces'

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: IUserRepository
  ) {}

  createUser(dto: IUserCreateDTO) {
    UserEntity.create(dto)
    return this.userRepository.createUser(dto)
  }

  listUsers() {
    return this.userRepository.listUsers()
  }
}
