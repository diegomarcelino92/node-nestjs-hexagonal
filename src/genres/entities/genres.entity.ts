import { BaseEntity } from 'src/common/entities/base.entity'

import { IGenreData } from './genres.entity.interfaces'

export class GenreEntity extends BaseEntity<IGenreData> {
  static create(genre: IGenreData) {
    return new this(genre)
  }
}
