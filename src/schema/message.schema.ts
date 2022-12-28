import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Schema } from '@nestjs/mongoose';
// import { HydratedDocument } from 'mongoose';

export type MessageDocument = Message & Document;
// export type MessageDocument = HydratedDocument<Message>;

@Schema()
export class Message {
  @Prop({ unique: true })
  wa_id: string;

  @Prop()
  phone_number_id: number;

  @Prop()
  text: string;

  @Prop()
  timestamp: number;

  @Prop()
  type: string;

  @Prop()
  statuses: [];
}

export const MessageSchema = SchemaFactory.createForClass(Message);

/*
import { Document, Schema } from 'mongoose';

export const MessageSchema = new Schema({
  wa_id: String,
  phone_number_id: Number,
  timestamp: Number,
  text: String,
});
*/
