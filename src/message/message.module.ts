import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
/* import { MessageSchema } from 'src/schema/message.schema'; */
import { MessageSchema } from 'src/schema/messagePerNumber.schema';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'MessagePerNumber',
        schema: MessageSchema,
      },
    ]),
  ],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
