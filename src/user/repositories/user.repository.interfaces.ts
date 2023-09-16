import { Result } from 'src/common/result-handler'

import { IUserData } from '../entities/user.entity.interfaces'

export const USER_REPOSITORY = 'USER_REPOSITORY'

export interface IUserRepository {
  createUser(user: IUserData): Promise<Result<string>>
  listUsers(): Promise<Result<IUserData[]>>
}
