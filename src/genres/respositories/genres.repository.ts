import { Inject, Injectable } from '@nestjs/common'

import { Result } from 'src/common/result-handler'
import { DatabaseService } from 'src/database/database.service'
import { IGenreData } from '../entities/genres.entity.interfaces'
import { IGenreRepository } from './genres.repository.interfaces'

export const GENRE_REPOSITORY = 'GENRE_REPOSITORY'

@Injectable()
export class GenreRepository implements IGenreRepository {
  constructor(@Inject(DatabaseService) private readonly db: DatabaseService) {}
  async createGenre(genre: IGenreData) {
    try {
      await this.db.genres.insert(genre)
      return Result.ok('')
    } catch (e) {
      return Result.fail(e)
    }
  }
}
