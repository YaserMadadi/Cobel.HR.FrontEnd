import { Component } from '@angular/core';

import { SeekModal } from '../../../../../xcore/tools/ui/view-base/seek.modal';

import { Message } from '../message';


@Component({
  selector: 'xcode-message-seek',
  templateUrl: './message.seek.html',
  styleUrls: ['./message.seek.css']
})
export class MessageSeekUI extends SeekModal<Message> {

  message: Message = new Message();

  constructor() {
    super();
  }

  ////ShowDialog(): void {
  ////  this.Show();
  ////}

  seekButton_Clicked() {
    this.onClose(this.message);
  }

  cancelButton_Clicked() {
    this.onClose(null);
  }
}