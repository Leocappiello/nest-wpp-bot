/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Message, MessageDocument } from 'src/schema/message.schema';
import { Model } from 'mongoose';

//
import { CreateMessageDto } from './dto/createMessageDto';
/* import { IMessage } from 'src/interfaces/messageInterfaces'; */

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<MessageDocument>,
  ) {}

  limitMessage = 10;
  //messages: IMessage[] = [];

  async create(message: CreateMessageDto) {
    const newMessage = new this.messageModel(message);
    console.log(newMessage);
    await newMessage.save();
  }

  async existsNumber(phoneNumber): Promise<boolean> {
    const result = await this.messageModel
      .findOne({
        phone_number_id: phoneNumber,
      })
      .then((message) => {
        console.log(message);
        if (message !== null) {
          return true;
        }
        return false;
      });
    return result;
  }

  async saveMessage(phoneNumber, message) {
    const existsNumber = await this.existsNumber(phoneNumber);
    if (!existsNumber) {
      console.log('doesnt exists that number');
      return this.create(message);
    }
    console.log('exists that number');
    await this.messageModel.updateOne(
      { phone_number_id: phoneNumber },
      { $push: {"statuses": message} },
    );
  }

  async getFirstMessageByNumber(limit = this.limitMessage): Promise<Message[]> {
    const firstMessages = await this.messageModel.find().limit(limit);
    return firstMessages;
  }

  getMessages() {
    //return this.messages.find().limit();
  }
}
