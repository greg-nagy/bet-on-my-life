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
@UseInterceptors(ClassSerializerInterceptor)
@Controller('users')
export class UsersController {
  constructor(private readonly userSvc: UserService) {}

  @Get('/')
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

  @Get('/:userId')
  @ApiResponse({
    status: 200,
    type: UserDto,
  })
  @ApiResponse({
    status: 200,
    type: null,
  })
  getById(@Param('userId') userId: string) {
    return this.userSvc.getById(userId);
  }

  @Get('/:userId/challenges')
  getChallenges(@Param('userId') userId: string) {
    return this.userSvc.getChallenges(userId);
  }

  @Get('/:userId/bets')
  getBets(@Param('userId') userId: string) {
    return this.userSvc.getBets(userId);
  }

  @Post('/')
  @ApiResponse({
    status: 200,
    type: FirebasePostResponseDto,
  })
  create(@Body() data: CreateUserDto) {
    return this.userSvc.create(data);
  }

  @Patch('/:userId')
  @ApiResponse({
    status: 200,
    type: UpdateUserDto,
  })
  update(@Param('userId') userId: string, @Body() data: UpdateUserDto) {
    return this.userSvc.update(userId, data);
  }

  @Delete('/:userId')
  @ApiResponse({
    status: 200,
    type: null,
  })
  delete(@Param('userId') userId: string) {
    return this.userSvc.delete(userId);
  }
}
