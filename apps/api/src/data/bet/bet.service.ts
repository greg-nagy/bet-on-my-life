import { Injectable } from '@nestjs/common';
import { AbstractEntityService } from '../firebase-entity/abstract-entity.service';
import { BetDto } from '../../common/dto/bet.dto';
import { CreateBetDto } from '../../common/dto/create-bet.dto';
import { UpdateBetDto } from '../../common/dto/update-bet.dto';
import { UserService } from '../user/user.service';
import { ChallengeService } from '../challenge/challenge.service';
import { ModuleRef } from '@nestjs/core';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class BetService extends AbstractEntityService<
  BetDto,
  CreateBetDto,
  UpdateBetDto
> {
  private userSvc: UserService;
  private challengeSvc: ChallengeService;

  constructor(private readonly moduleRef: ModuleRef) {
    super('https://bml-bet.firebaseio.com/bets', BetDto);
  }

  onModuleInit() {
    this.userSvc = this.moduleRef.get(UserService);
    this.challengeSvc = this.moduleRef.get(ChallengeService);
  }

  getAuthor(betId: string) {
    return this.getById(betId).pipe(
      switchMap((b) => this.userSvc.getById(b.author))
    );
  }

  getChallenge(betId: string) {
    return this.getById(betId).pipe(
      switchMap((b) => this.challengeSvc.getById(b.challenge))
    );
  }
}
