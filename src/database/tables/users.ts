import { BaseTable } from './base'

export const users = 'users'

export interface UsersTable extends BaseTable {
  name: string
  surname: string
  birthdate: string
}
