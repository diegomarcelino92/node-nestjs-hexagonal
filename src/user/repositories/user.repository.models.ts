import { Exclude, Expose, plainToClass } from '@nestjs/class-transformer'

import { BaseModel } from 'src/common/models/base.model'

import { IUserData } from '../entities/user.entity.interfaces'

@Exclude()
export class UserOutboundModel extends BaseModel implements IUserData {
  @Expose()
  id: number

  @Expose()
  name: string

  @Expose()
  surname: string

  @Expose()
  birthdate: string

  @Exclude()
  genres: string[]

  static create(user: IUserData) {
    return plainToClass(this, user)
  }
}

export class UserGenreOutboundModel extends BaseModel {
  id: number

  @Expose({ name: 'userId' })
  user_id: number

  @Expose({ name: 'genreId' })
  genre_id: number

  static create(genreId: string, userId: string) {
    return plainToClass(this, { genreId, userId })
  }
}
