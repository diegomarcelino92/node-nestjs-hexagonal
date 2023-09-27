import { Inject, Injectable } from '@nestjs/common'

import { GenreEntity } from '../entities/genres.entity'
import { GENRE_REPOSITORY } from '../respositories/genres.repository'
import { IGenreRepository } from '../respositories/genres.repository.interfaces'
import { IGenreService } from './genres.service.interfaces'

export const GENRE_SERVICE = 'GENRE_SERVICE'

@Injectable()
export class GenreService implements IGenreService {
  constructor(
    @Inject(GENRE_REPOSITORY) private readonly genreRepository: IGenreRepository
  ) {}

  createGenre(raw) {
    const genre = GenreEntity.create(raw)
    return this.genreRepository.createGenre(genre.raw)
  }
}
