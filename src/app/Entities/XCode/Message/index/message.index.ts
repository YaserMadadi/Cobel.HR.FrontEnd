import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Message } from '../message';
import { MessageService } from '../message.service';
import { MessageMasterUI } from '../master/message.master';
import { MessageEditUI } from '../edit/message.edit';
import { MessageDeleteUI } from '../delete/message.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'xcode-message-index',
  templateUrl: './message.index.html',
  styleUrls: ['./message.index.css']
})
export class MessageIndexUI extends IndexView<Message> implements AfterViewInit, IIndexView<Message> {

  constructor(private messageService: MessageService) {
    super(messageService);
    this.filterInstance = Message.SeekInstance();
    this.currentInstance = new Message();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(messageEditUI: MessageEditUI){
    messageEditUI.ShowDialog(new Message());
  }

  resetFilter() {
    this.filterInstance = Message.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(message: Message) {
    this.onRefresh();
    this.currentInstance = new Message();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}