import { Result } from 'src/common/result-handler'
import { IUserData } from '../entities/user.entity.interfaces'

export const USER_SERVICE = 'USER_SERVICE'

export interface IUserService {
  createUser(user: IUserData): Promise<Result<string>>
  listUsers(): Promise<Result<IUserData[]>>
}
