import { Component, Input } from '@angular/core';
import { MessageType } from '../entity/MessageType';
import { Message } from '../entity/Message';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
})
export class PopupComponent {
  @Input({ required: true, alias: 'popup' }) public popup: Message = {
    message: "",
    type: MessageType.INFO,
    open: false,
    timeout: 0
  };
}
