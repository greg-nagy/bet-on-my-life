import { Module, ValidationPipe } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from '../data/data.module';
import { APP_PIPE } from '@nestjs/core';
import { BetsController } from './bets/bets.controller';
import { ChallengesController } from './challenges/challenges.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [DataModule],
  controllers: [
    AppController,
    UsersController,
    BetsController,
    ChallengesController,
  ],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        transform: true,
        validateCustomDecorators: true,
        whitelist: false,
        disableErrorMessages: false, // TODO: enable it in prod
      }),
    },
  ],
})
export class AppModule {}
