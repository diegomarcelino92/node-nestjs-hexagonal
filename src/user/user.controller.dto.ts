import { Exclude, Expose } from '@nestjs/class-transformer'
import { IsArray, IsString } from '@nestjs/class-validator'

import { IUserCreateDTO } from './services'

@Exclude()
export class UserInboundDTO implements IUserCreateDTO {
  @Expose()
  @IsString()
  name: string

  @Expose()
  @IsString()
  surname: string

  @Expose()
  @IsString()
  birthdate: string

  @Expose()
  @IsArray()
  genres: string[]
}
