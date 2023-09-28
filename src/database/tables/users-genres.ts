import { BaseTable } from './base'

export const usersGenres = 'users_genres'

export interface UsersGenresTable extends BaseTable {
  user_d: number
  genre_d: number
}
