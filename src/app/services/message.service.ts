import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];

  push(message: string) {
    this.messages.push(message);
  }

  pop(message: string) {
    this.messages.pop();
  }
  clear() {
    this.messages = [];
  }
}
