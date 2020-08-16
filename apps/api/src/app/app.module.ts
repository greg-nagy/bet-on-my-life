import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from '../data/data.module';
import { UserController } from './user/user.controller';
import { BetController } from './bet/bet.controller';
import { ChallengeController } from './challenge/challenge.controller';

@Module({
  imports: [DataModule],
  controllers: [
    AppController,
    UserController,
    BetController,
    ChallengeController,
  ],
  providers: [AppService],
})
export class AppModule {}
