import { Result } from 'src/common/result-handler'
import { IUserData } from '../entities/user.entity.interfaces'

export const USER_SERVICE = 'USER_SERVICE'

export interface IUserService {
  createUser(user: IUserInboundDTO): Promise<Result<string>>
  listUsers(): Promise<Result<IUserInboundDTO[]>>
}

export class IUserInboundDTO implements IUserData {
  firstname: string
  surname: string
  birthdate: string
  genres: { id: string }[]
}
