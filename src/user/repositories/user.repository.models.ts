import { Exclude, Expose, plainToClass } from '@nestjs/class-transformer'

import { BaseModel } from 'src/common/models/base.model'

import { IUserData } from '../entities/user.entity.interfaces'

@Exclude()
export class UserOutboundModel extends BaseModel {
  @Expose()
  id: number

  @Expose()
  name: string

  @Expose()
  surname: string

  @Expose()
  birthdate: string

  static create(user: IUserData) {
    return plainToClass(this, user)
  }
}

export class UserGenreOutboundModel extends BaseModel {
  id: number

  userId: number

  genreId: number

  static create(genreId: string, userId: string) {
    return plainToClass(this, { genreId, userId })
  }
}
