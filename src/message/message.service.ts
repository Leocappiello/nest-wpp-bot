/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Message, MessageDocument } from 'src/schema/message.schema';
import { Model } from 'mongoose';

//
import { CreateMessageDto } from './dto/createMessageDto';
import { MessagePerNumber } from 'src/schema/messagePerNumber.schema';
import { CreateMessagePerNumberDto } from './dto/createMessagePerNumberDto';
/* import { IMessage } from 'src/interfaces/messageInterfaces'; */

@Injectable()
export class MessageService {
  constructor(
    //@InjectModel(Message.name) private messageModel: Model<MessageDocument>,
    @InjectModel(MessagePerNumber.name)
    private messagePerNumberModel: Model<MessagePerNumber>,
  ) {}

  limitMessage = 10;
  //messages: IMessage[] = [];

  /* async create(message: CreateMessageDto, messagePerNumber: CreateMessagePerNumberDto) { */
  async create(messagePerNumber: CreateMessagePerNumberDto) {
    /* const newMessage = new this.messageModel(message);
    console.log(newMessage);
    await newMessage.save(); */

    const newMessage = new this.messagePerNumberModel(messagePerNumber);
    await newMessage.save(function (err) {
      if (err) {
        if (err.message.toString().includes('11000')) {
          console.log('Already exists object');
        } else {
          console.log('Something else');
        }
        return;
      }
    });
  }

  /* async existsNumber(phoneNumber): Promise<boolean> {
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
  } */
  async existsNumber(phoneNumber) {
    const result = await this.messagePerNumberModel.findOne({
      number: phoneNumber,
    });
    if (result) {
      console.log('exists number');
      return true;
    }
    console.log('Doesnt exists that number');
    return false;
  }

  /*
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
  }*/
  async saveMessage(phoneNumber, message) {
    const existsNumber = await this.existsNumber(phoneNumber);
    if (!existsNumber) {
      console.log("Doesnt exists, then i'll create");
      return this.create(message);
    }
    console.log("Already exists, i'll push in the array");
    await this.messagePerNumberModel.updateOne(
      { number: phoneNumber },
      {
        $push: {
          data: message,
        },
      },
    );
  }

  /*
  async getFirstMessageByNumber(limit = this.limitMessage): Promise<Message[]> {
    const firstMessages = await this.messageModel.find().limit(limit);
    return firstMessages;
  }

  getMessages() {
    //return this.messages.find().limit();
  } */
}
