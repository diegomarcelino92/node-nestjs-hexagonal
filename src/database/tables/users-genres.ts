import { BaseTable } from './base'

export const usersGenres = 'users_genres'

export interface UsersGenresTable extends BaseTable {
  user_id: number
  genre_id: number
}
