import { Module } from '@nestjs/common'
import { KnexModule } from 'nest-knexjs'

import { DB_CONFIG } from './database/knexfile'
import { UserModule } from './user/user.module'

@Module({
  imports: [KnexModule.forRoot({ config: DB_CONFIG }), UserModule]
})
export class AppModule {}
