export class Status {
  status: 'string';
  timestamp: number;
}

export class Data {
  wa_id: string;
  text: string;
  timestamp: number;
  type: string;
}

export class CreateMessagePerNumberDto {
  number: number;
  data: Data;
}
