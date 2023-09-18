import { MessageType } from './MessageType';

export interface Message {
  message: string;
  open: boolean;
  type: MessageType;
  timeout: number;
}
