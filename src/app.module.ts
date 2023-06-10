import { Module } from '@nestjs/common'

import { DatabaseModule } from './database/database.module'
import { UserModule, UserOutboundModel } from './user/user.module'

const models = [UserOutboundModel]

@Module({
  imports: [DatabaseModule.forRoot(models), UserModule]
})
export class AppModule {}
