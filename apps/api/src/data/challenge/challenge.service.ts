import { Injectable } from '@nestjs/common';
import { AbstractEntityService } from '../firebase-entity/abstract-entity.service';
import { ChallengeDto } from '../../common/dto/challenge.dto';
import { CreateChallengeDto } from '../../common/dto/create-challenge.dto';
import { UpdateChallengeDto } from '../../common/dto/update-challenge.dto';
import { UserService } from '../user/user.service';
import { BetService } from '../bet/bet.service';
import { ModuleRef } from '@nestjs/core';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class ChallengeService extends AbstractEntityService<
  ChallengeDto,
  CreateChallengeDto,
  UpdateChallengeDto
> {
  private userSvc: UserService;
  private betSvc: BetService;

  constructor(private readonly moduleRef: ModuleRef) {
    super('https://bml-challenge.firebaseio.com/challenges', ChallengeDto);
  }

  onModuleInit() {
    this.userSvc = this.moduleRef.get(UserService);
    this.betSvc = this.moduleRef.get(BetService);
  }

  getAuthor(challengeId: string) {
    return this.getById(challengeId).pipe(
      switchMap((ch) => this.userSvc.getById(ch.author))
    );
  }

  getBets(challengeId: string) {
    return this.betSvc.getFilteredList('challenge', challengeId);
  }
}
