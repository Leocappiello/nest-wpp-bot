import { Injectable } from '@nestjs/common';
import { MessageModule } from './message/message.module';
import { MessageService } from './message/message.service';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
