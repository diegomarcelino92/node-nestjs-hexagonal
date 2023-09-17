import { IsString } from '@nestjs/class-validator'

import { IGenreData } from './entities/genres.entity.interfaces'

export class GenreInboundDTO implements IGenreData {
  @IsString()
  name: string

  @IsString()
  description: string
}
