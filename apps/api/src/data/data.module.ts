import { HttpModule, Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { BetService } from './bet/bet.service';
import { ChallengeService } from './challenge/challenge.service';
import { AbstractEntityService } from './firebase-entity/abstract-entity.service';

@Module({
  imports: [HttpModule],
  providers: [UserService, BetService, ChallengeService, AbstractEntityService],
  exports: [UserService, BetService, ChallengeService],
})
export class DataModule {}
