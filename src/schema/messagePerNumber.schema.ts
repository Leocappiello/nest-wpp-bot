import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Schema } from '@nestjs/mongoose';

export type MessagePerNumberDocument = MessagePerNumber & Document;

@Schema()
export class Data {
  @Prop({ unique: true })
  wa_id: string;

  @Prop()
  text: string;

  @Prop()
  timestamp: number;

  @Prop()
  type: string;

  @Prop()
  statuses: [];
}

@Schema()
export class MessagePerNumber {
  @Prop({ unique: true })
  number: number;

  @Prop()
  data: [Data];
}

export const MessageSchema = SchemaFactory.createForClass(MessagePerNumber);
