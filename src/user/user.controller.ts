import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Post
} from '@nestjs/common'

import { IUserInboundDTO, IUserService, USER_SERVICE } from './services'

@Controller('user')
export class UserController {
  constructor(
    @Inject(USER_SERVICE)
    private readonly userService: IUserService
  ) {}

  @Post('/create')
  async create(
    @Body()
    body: IUserInboundDTO
  ) {
    const result = await this.userService.createUser(body)

    if (result.ok) {
      return { created: true }
    } else {
      throw new HttpException('CreateError', HttpStatus.UNPROCESSABLE_ENTITY)
    }
  }

  @Get('/list')
  getList() {
    return this.userService.listUsers()
  }
}
