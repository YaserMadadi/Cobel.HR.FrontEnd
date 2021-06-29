import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { AnswerType } from '../answerType';
import { AnswerTypeService } from '../answerType.service';
import { AnswerTypeMasterUI } from '../master/answerType.master';
import { AnswerTypeEditUI } from '../edit/answerType.edit';
import { AnswerTypeDeleteUI } from '../delete/answerType.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { AnswerTypeItemEditUI } from '../../AnswerTypeItem/edit/answerTypeItem.edit';
import { AnswerTypeItem } from '../../AnswerTypeItem/answerTypeItem';
import { QuestionaryItemEditUI } from '../../QuestionaryItem/edit/questionaryItem.edit';
import { QuestionaryItem } from '../../QuestionaryItem/questionaryItem';



@Component({
  selector: 'lad-answerType-index',
  templateUrl: './answerType.index.html',
  styleUrls: ['./answerType.index.css']
})
export class AnswerTypeIndexUI extends IndexView<AnswerType> implements AfterViewInit, IIndexView<AnswerType> {

  constructor(private answerTypeService: AnswerTypeService) {
    super(answerTypeService);
    this.filterInstance = AnswerType.SeekInstance();
    this.currentInstance = new AnswerType();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region AnswerTypeItem

  public answerTypeItem_Clicked(answerTypeItemEditUI: AnswerTypeItemEditUI) {
    answerTypeItemEditUI.AnswerType = this.currentInstance;
    answerTypeItemEditUI.ShowDialog(new AnswerTypeItem());
  }
                    
  public answerTypeItemEditUI_Closed(answerTypeItem: AnswerTypeItem) {
    if (!answerTypeItem)
      return;
    this.onRefresh();
  }
  
  //#endregion AnswerTypeItem

  //#region QuestionaryItem

  public questionaryItem_Clicked(questionaryItemEditUI: QuestionaryItemEditUI) {
    questionaryItemEditUI.AnswerType = this.currentInstance;
    questionaryItemEditUI.ShowDialog(new QuestionaryItem());
  }
                    
  public questionaryItemEditUI_Closed(questionaryItem: QuestionaryItem) {
    if (!questionaryItem)
      return;
    this.onRefresh();
  }
  
  //#endregion QuestionaryItem


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(answerTypeEditUI: AnswerTypeEditUI){
    answerTypeEditUI.ShowDialog(new AnswerType());
  }

  resetFilter() {
    this.filterInstance = AnswerType.SeekInstance();
    
    
  }

  public onEditModalClosed(answerType: AnswerType) {
    this.onRefresh();
    this.currentInstance = new AnswerType();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}