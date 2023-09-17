import { BaseEntity } from 'src/common/entities/base.entity'
import { IUserData } from './user.entity.interfaces'

export class UserEntity extends BaseEntity<IUserData> {
  get isMajority(): boolean {
    return true
  }

  static create(raw: IUserData): UserEntity {
    if (raw.name.length > 3 && raw.surname && raw.birthdate) {
      return new this(raw)
    }

    throw new Error('Method not implemented.')
  }
}
