import { Module } from '@nestjs/common'

import { DatabaseModule } from './database/database.module'
import { GenresModule } from './genres/genres.module'
import { UserModule } from './user/user.module'

@Module({
  imports: [DatabaseModule, UserModule, GenresModule]
})
export class AppModule {}
