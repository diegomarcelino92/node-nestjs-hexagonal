import { Result } from 'src/common/result-handler'
import { IGenreData } from '../entities/genres.entity.interface'

export interface IGenreService {
  createGenre(genre: IGenreData): Promise<Result<string>>
}
