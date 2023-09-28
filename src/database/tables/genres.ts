import { BaseTable } from './base'

export const genres = 'genres'

export interface GenresTable extends BaseTable {
  name: string
  description: string
}
