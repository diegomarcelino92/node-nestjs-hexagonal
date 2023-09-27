import { Result } from 'src/common/result-handler'

import { IUserCreateDTO, IUserListDTO } from '../services'

export const USER_REPOSITORY = 'USER_REPOSITORY'

export interface IUserRepository {
  createUser(user: IUserCreateDTO): Promise<Result<string>>
  listUsers(): Promise<Result<IUserListDTO[]>>
}
