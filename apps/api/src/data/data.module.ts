import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { BetService } from './bet/bet.service';
import { ChallengeService } from './challenge/challenge.service';
import { EntityService } from './entity/entity.service';

@Module({
  providers: [UserService, BetService, ChallengeService, EntityService],
})
export class DataModule {}
