import { NgForm } from '@angular/forms';
import { Component, Input, ViewChild } from '@angular/core';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

import { IEditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal.interface';
import { EditModal } from '../../../../../xcore/tools/ui/view-base/edit.modal';
import { ForeignComponent } from '../../../../../xcore/tools/foreign.component';
import { Message } from '../message';
import { MessageService } from '../message.service';



@Component({
  selector: 'xcode-message-edit',
  templateUrl: './message.edit.html',
  styleUrls: ['./message.edit.css']
})
export class MessageEditUI extends EditModal<Message> implements IEditModal<Message>  {
  
  constructor(private messageService: MessageService) {
    super(messageService); 
    this.currentInstance = new Message();
  }

  

  @ViewChild('messageEditUI')
  private messageEditUI: NgForm;

  Init(message: Message = new Message()) {
    if (message.isNew)
      this.messageEditUI.reset();
    this.InitMessage(message);
    this.loadLists();
  }

  private loadLists() {
    
    
  }
  
  InitMessage(message: Message) {
    if (!message.isNew) {
      // Fixed Properties : those you want to not Changable.
      // No Item...
    } else {
      // No Item...
    }
    this.currentInstance = message;
  }

  ResetForm() {
    
  }
}