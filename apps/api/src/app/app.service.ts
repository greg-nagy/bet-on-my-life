import { Injectable } from '@nestjs/common';
import { Message } from '@bet-on-my-life/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
