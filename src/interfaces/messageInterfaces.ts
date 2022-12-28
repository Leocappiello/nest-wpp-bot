export interface IMessage {
  wa_id: string;
  phone_number: number;
}

// Reaction
export interface IReactionMessage {
  type: string;
  reaction: {
    wa_id: string;
    emoji: string;
  };
}

// Media
export interface IMediaMessage {
  type: string;
  image: {
    id: string;
  };
}

// Location
export interface ILocationMessage {
  type: string;
  location: {
    longitude: string;
    latitude: string;
    name: string;
    address: string;
  };
}

// Reply
export interface IReplyMessage {
  type: string;
  text: {
    preview_url: boolean;
    body: string;
  };
}

// Template
export interface ITemplateMessage {
  type: string;
  template: {
    name: string;
    language: {
      code: string;
    };
  };
}

// Successful response
export interface IResponseMessage {
  contacts: {
    input: number;
    wa_id: number;
  };
  messages: {
    id: string;
  };
}
