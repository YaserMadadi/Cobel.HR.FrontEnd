import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { MasterModal } from '../../../../../xcore/tools/ui/view-base/master.modal';

import { Message } from '../message';
import { MessageService } from '../message.service';
import { MessageDeleteUI } from '../delete/message.delete';
import { MessageEditUI } from '../edit/message.edit';



@Component({
  selector: 'xcode-message-master',
  templateUrl: './message.master.html',
  styleUrls: ['./message.master.css'],
  providers: [
    MessageService,
    
  ]
})
export class MessageMasterUI extends MasterModal<Message> {

  constructor(private messageService: MessageService) {
    super(messageService);
  }
}