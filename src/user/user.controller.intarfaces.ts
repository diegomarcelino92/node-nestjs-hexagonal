import { Expose } from '@nestjs/class-transformer'
import { IsArray, IsString } from '@nestjs/class-validator'

import { IUserData } from './entities/user.entity.interfaces'

export class IUserInboundDTO implements IUserData {
  @Expose({ name: 'firstname' })
  @IsString()
  name: string

  @IsString()
  surname: string

  @IsString()
  birthdate: string

  @IsArray()
  genres: string[]
}
