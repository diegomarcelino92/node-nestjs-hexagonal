import { Test, TestingModule } from '@nestjs/testing'
import { USER_REPOSITORY } from '../repositories'
import { UserRepositoryInMemory } from '../repositories/user.repository.memory'
import { UserService } from './user.service'
import { IUserService, USER_SERVICE } from './user.service.interfaces'

describe('UserService', () => {
  let service: IUserService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: USER_SERVICE,
          useClass: UserService
        },
        {
          provide: USER_REPOSITORY,
          useClass: UserRepositoryInMemory
        }
      ]
    }).compile()

    service = module.get<UserService>(UserService)
  })

  it('should be create an user', async () => {
    const user = {
      birthdate: new Date().toISOString(),
      firstname: 'John',
      surname: 'William',
      genres: []
    }

    await service.createUser(user)
    const result = await service.listUsers()

    expect(result.value.length).toBe(1)
  })
})
