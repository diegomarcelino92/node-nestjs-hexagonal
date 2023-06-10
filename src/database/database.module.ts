import { Global, Module } from '@nestjs/common'

import { knexFactory } from './connection.config'

export const DatabaseModule = {
  forRoot: (models: any[]) => {
    const modelProviders = models.map((model) => ({
      provide: model.name,
      useValue: model
    }))

    const providers = [
      ...modelProviders,
      {
        provide: 'KnexConnection',
        useFactory: knexFactory
      }
    ]

    @Global()
    @Module({
      providers: [...providers],
      exports: [...providers]
    })
    class DatabaseModuleCls {}

    return DatabaseModuleCls
  }
}
