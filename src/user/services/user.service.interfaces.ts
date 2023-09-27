import { Result } from 'src/common/result-handler'
import { IUserData } from '../entities/user.entity.interfaces'

export const USER_SERVICE = 'USER_SERVICE'

export interface IUserService {
  createUser(user: IUserCreateDTO): Promise<Result<string>>
  listUsers(): Promise<Result<IUserListDTO[]>>
}

export interface IUserCreateDTO extends IUserData {
  genres: string[]
}

export interface IUserListDTO extends IUserData {
  genres: { name: string; descripiton: string }[]
}
