import { BaseModel } from 'src/common/models/base.model'
import { Result } from 'src/common/result-handler'

import { UserEntity } from '../entities/user.entity'

export const USER_REPOSITORY = 'USER_REPOSITORY'

export interface IUserRepository {
  createUser(user: UserEntity): Promise<Result<string>>
  listUsers(): Promise<Result<UserEntity[]>>
}

export class IUserOutboundModel extends BaseModel {
  static tb = 'users'
  static tb_genres = 'user_genres'
  static tb_genres_fk = 'user_genres.user_id'
  id: number
  name: string
  surname: string
  birthdate: string
}
