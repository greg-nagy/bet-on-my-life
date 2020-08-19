import { Injectable } from '@nestjs/common';
import { AbstractEntityService } from '../firebase-entity/abstract-entity.service';
import { UserDto } from '../../common/dto/user.dto';
import { CreateUserDto } from '../../common/dto/create-user.dto';
import { UpdateUserDto } from '../../common/dto/update-user.dto';

@Injectable()
export class UserService extends AbstractEntityService<
  UserDto,
  CreateUserDto,
  UpdateUserDto
> {
  constructor() {
    super('https://bml-user.firebaseio.com/users', UserDto);
  }
}
