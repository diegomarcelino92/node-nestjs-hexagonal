import { Module } from '@nestjs/common'

import { GenresController } from './genres.controller'
import {
  GENRE_REPOSITORY,
  GenreRepository
} from './respositories/genre.repository'
import { GENRE_SERVICE, GenreService } from './services/genres.service'

@Module({
  controllers: [GenresController],
  providers: [
    { provide: GENRE_SERVICE, useClass: GenreService },
    { provide: GENRE_REPOSITORY, useClass: GenreRepository }
  ]
})
export class GenresModule {}
