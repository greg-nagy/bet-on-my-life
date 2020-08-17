import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from '../../data/user/user.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from '../../common/dto/user.dto';
import { CreateUserDto } from '../../common/dto/create-user.dto';
import { UpdateUserDto } from '../../common/dto/update-user.dto';
import { FirebasePostResponseDto } from '../../common/dto/firebase-post-response.dto';

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
  @ApiResponse({
    status: 200,
    type: null,
  })
  getAll() {
    return this.userSvc.getAll();
  }

  @Get('/:id')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiResponse({
    status: 200,
    type: UserDto,
  })
  @ApiResponse({
    status: 200,
    type: null,
  })
  getById(@Param('id') id: string) {
    return this.userSvc.getById(id);
  }

  @Post('/')
  @ApiResponse({
    status: 200,
    type: FirebasePostResponseDto,
  })
  create(@Body() data: CreateUserDto) {
    return this.userSvc.create(data);
  }

  @Patch('/:id')
  @ApiResponse({
    status: 200,
    type: UpdateUserDto,
  })
  update(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return this.userSvc.update(id, data);
  }

  @Delete('/:id')
  @ApiResponse({
    status: 200,
    type: null,
  })
  delete(@Param('id') id: string) {
    return this.userSvc.delete(id);
  }
}
