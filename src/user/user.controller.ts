import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Post
} from '@nestjs/common'

import { IUserService, USER_SERVICE } from './services'
import { UserInboundDTO } from './user.controller.dto'

@Controller('user')
export class UserController {
  constructor(
    @Inject(USER_SERVICE)
    private readonly userService: IUserService
  ) {}

  @Post('/create')
  async create(@Body() body: UserInboundDTO) {
    const result = await this.userService.createUser(body)

    if (result.ok) {
      return { created: true }
    } else {
      throw new HttpException('CreateError', HttpStatus.UNPROCESSABLE_ENTITY)
    }
  }

  @Get('/list')
  async getList() {
    const result = await this.userService.listUsers()
    return result.value
  }
}
