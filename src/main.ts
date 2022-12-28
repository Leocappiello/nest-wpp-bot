import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
/* import { MessageService } from './message/message.service';
import { ConfigModule } from '@nestjs/config';
import { Message, MessageSchema } from './schema/message.schema';
 */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
