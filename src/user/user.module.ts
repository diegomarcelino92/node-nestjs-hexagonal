import { Module } from '@nestjs/common'

import { USER_REPOSITORY, UserRepository } from './repositories'
import { USER_SERVICE, UserService } from './services'
import { UserController } from './user.controller'

@Module({
  controllers: [UserController],
  providers: [
    { provide: USER_SERVICE, useClass: UserService },
    { provide: USER_REPOSITORY, useClass: UserRepository }
  ]
})
export class UserModule {}
