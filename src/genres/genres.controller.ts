import { Body, Controller, Inject, Post } from '@nestjs/common'

import { GenreInboundDTO } from './genres.controller.dto'
import { GENRE_SERVICE } from './services/genres.service'
import { IGenreService } from './services/genres.service.interfaces'

@Controller('genres')
export class GenresController {
  constructor(
    @Inject(GENRE_SERVICE) private readonly genreService: IGenreService
  ) {}

  @Post('/create')
  create(@Body() genre: GenreInboundDTO) {
    return this.genreService.createGenre(genre)
  }
}
