import { Controller, Get } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get()
  async hello() {
    /* this.messageService.create({
      wa_id: '',
      text: '',
      timestamp: 1,
      phone_number_id: 1,
      type: '',
    }); */
    /* console.log(await this.messageService.existsNumber(1)); */
    await this.messageService.saveMessage(1, 'hola');
  }
}
