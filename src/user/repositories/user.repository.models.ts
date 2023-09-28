import { Exclude, Expose, plainToClass } from '@nestjs/class-transformer'

import { BaseModel } from 'src/common/models/base.model'

import { IUserCreateDTO, IUserListDTO } from '../services'

export class UserOutboundModelFactory {
  static toPersistence(user: IUserCreateDTO) {
    return plainToClass(UserCreateOutboundModel, user)
  }

  static toDto(user: IUserListDTO) {
    return plainToClass(UserListOutboundModel, user)
  }
}

@Exclude()
export class UserCreateOutboundModel extends BaseModel {
  @Expose()
  id: string

  @Expose()
  name: string

  @Expose()
  surname: string

  @Expose()
  birthdate: string
}

class UserListOutboundModel extends UserCreateOutboundModel {
  @Expose()
  genres: { name: string; description: string }[]
}

@Exclude()
export class UserGenreOutboundModel extends BaseModel {
  @Expose()
  id: number

  @Expose({ name: 'userId' })
  user_id: number

  @Expose({ name: 'genreId' })
  genre_id: number

  static toPersistence(genreId: string, userId: string) {
    return plainToClass(this, { genreId, userId })
  }
}
