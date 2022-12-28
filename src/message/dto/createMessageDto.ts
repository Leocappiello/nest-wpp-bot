export class CreateMessageDto {
  wa_id: string;
  phone_number_id: number;
  text: string;
  timestamp: number;
  type: string;
  statuses: [];
}
