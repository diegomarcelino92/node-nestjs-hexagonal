import { Global, Module } from '@nestjs/common'
import { KnexModule } from 'nest-knexjs'

import { DatabaseService } from './database.service'
import { DB_CONFIG } from './knexfile'

@Global()
@Module({
  imports: [KnexModule.forRoot({ config: DB_CONFIG })],
  exports: [DatabaseService],
  providers: [DatabaseService]
})
export class DatabaseModule {}
