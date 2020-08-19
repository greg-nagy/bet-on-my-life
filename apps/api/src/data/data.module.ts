import { HttpModule, Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { BetService } from './bet/bet.service';
import { ChallengeService } from './challenge/challenge.service';

@Module({
  imports: [HttpModule],
  providers: [UserService, BetService, ChallengeService],
  exports: [UserService, BetService, ChallengeService],
})
export class DataModule {}
