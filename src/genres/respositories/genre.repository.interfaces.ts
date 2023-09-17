import { Result } from 'src/common/result-handler'
import { IGenreData } from '../entities/genres.entity.interfaces'

export interface IGenreRepository {
  createGenre(user: IGenreData): Promise<Result<string>>
}
