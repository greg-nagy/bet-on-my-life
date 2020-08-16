import { Module, ValidationPipe } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from '../data/data.module';
import { UserController } from './user/user.controller';
import { BetController } from './bet/bet.controller';
import { ChallengeController } from './challenge/challenge.controller';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [DataModule],
  controllers: [
    AppController,
    UserController,
    BetController,
    ChallengeController,
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
