import { Model, ModelClass } from 'objection'

import { Result } from 'src/common/result-handler'

import { UserEntity } from '../entities/user.entity'

export const USER_REPOSITORY = 'USER_REPOSITORY'

export interface IUserRepository {
  createUser(user: UserEntity): Promise<Result<string>>
  listUsers(): Promise<Result<UserEntity[]>>
}

export type IUserOutboundModel = ModelClass<UserOutboundModel>

export class UserOutboundModel extends Model {
  static tableName = 'users'
  id: number
  name: string
  surname: string
  birthdate: string
  createdAt: string
  updatedAt: string
}
