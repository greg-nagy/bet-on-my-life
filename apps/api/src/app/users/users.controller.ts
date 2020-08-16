import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from '../../data/user/user.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from '../../common/dto/user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userSvc: UserService) {}

  @Get('/')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiResponse({
    status: 200,
    type: UserDto,
  })
  getAll() {
    return this.userSvc.getAll();
  }

  @Get('/:userId')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiResponse({
    status: 200,
    type: UserDto,
  })
  @ApiResponse({
    status: 404,
    description: 'User does not exist!',
  })
  getById(@Param('userId') userId: string) {
    return this.userSvc.getById(userId);
  }
}
