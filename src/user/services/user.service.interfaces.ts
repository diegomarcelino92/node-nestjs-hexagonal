import { Result } from 'src/common/result-handler'

export const USER_SERVICE = 'USER_SERVICE'

export interface IUserService {
  createUser(user: IUserInboundDTO): Promise<Result<string>>
  listUsers(): Promise<Result<IUserInboundDTO[]>>
}

export class IUserInboundDTO {
  firstname: string
  surname: string
  birthdate: string
  genres: string[]
}
