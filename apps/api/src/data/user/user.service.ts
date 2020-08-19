import { Injectable } from '@nestjs/common';
import { AbstractEntityService } from '../firebase-entity/abstract-entity.service';
import { UserDto } from '../../common/dto/user.dto';
import { CreateUserDto } from '../../common/dto/create-user.dto';
import { UpdateUserDto } from '../../common/dto/update-user.dto';
import { ChallengeService } from '../challenge/challenge.service';
import { BetService } from '../bet/bet.service';
import { ModuleRef } from '@nestjs/core';

@Injectable()
export class UserService extends AbstractEntityService<
  UserDto,
  CreateUserDto,
  UpdateUserDto
> {
  private challengeSvc: ChallengeService;
  private betSvc: BetService;

  constructor(private readonly moduleRef: ModuleRef) {
    super('https://bml-user.firebaseio.com/users', UserDto);
  }

  onModuleInit() {
    this.challengeSvc = this.moduleRef.get(ChallengeService);
    this.betSvc = this.moduleRef.get(BetService);
  }

  getChallenges(userId: string) {
    return this.challengeSvc.getFilteredList('author', userId);
  }

  getBets(userId: string) {
    return this.betSvc.getFilteredList('author', userId);
  }
}
