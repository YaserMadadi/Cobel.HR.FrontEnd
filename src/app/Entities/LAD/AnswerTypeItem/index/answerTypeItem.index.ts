import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { AnswerTypeItem } from '../answerTypeItem';
import { AnswerTypeItemService } from '../answerTypeItem.service';
import { AnswerTypeItemMasterUI } from '../master/answerTypeItem.master';
import { AnswerTypeItemEditUI } from '../edit/answerTypeItem.edit';
import { AnswerTypeItemDeleteUI } from '../delete/answerTypeItem.delete';

import { AnswerType } from '../../AnswerType/answerType';
import { AnswerTypeEditUI } from '../../AnswerType/edit/answerType.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'lad-answerTypeItem-index',
  templateUrl: './answerTypeItem.index.html',
  styleUrls: ['./answerTypeItem.index.css']
})
export class AnswerTypeItemIndexUI extends IndexView<AnswerTypeItem> implements AfterViewInit, IIndexView<AnswerTypeItem> {

  constructor(private answerTypeItemService: AnswerTypeItemService) {
    super(answerTypeItemService);
    this.filterInstance = AnswerTypeItem.SeekInstance();
    this.currentInstance = new AnswerTypeItem();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(answerTypeItemEditUI: AnswerTypeItemEditUI){
    answerTypeItemEditUI.ShowDialog(new AnswerTypeItem());
  }

  resetFilter() {
    this.filterInstance = AnswerTypeItem.SeekInstance();
    
    
  }

  public onEditModalClosed(answerTypeItem: AnswerTypeItem) {
    this.onRefresh();
    this.currentInstance = new AnswerTypeItem();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}