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
    }); 
     console.log(await this.messageService.existsNumber(1)); 
     await this.messageService.saveMessage(1, 'hola'); */

    //
    const data = {
      wa_id: 'wa_id',
      timestamp: 1,
      text: 'hola',
      type: 'text',
      statuses: [],
    };

    //
    const dataToCreate = {
      number: 2,
      data: data,
    };

    // creating element

    /* this.messageService.create({
      number: 1,
      data: data,
    }); */

    // verifying if exists that number
    /* this.messageService.existsNumber(1); */

    // exists that number and add to array
    //this.messageService.saveMessage(1, data);
    this.messageService.saveMessage(2, dataToCreate);
  }
}
