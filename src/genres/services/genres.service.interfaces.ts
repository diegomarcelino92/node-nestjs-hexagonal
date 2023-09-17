import { Result } from 'src/common/result-handler'
import { IGenreData } from '../entities/genres.entity.interfaces'

export interface IGenreService {
  createGenre(genre: IGenreData): Promise<Result<string>>
}
