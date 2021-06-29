import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { QuestionaryItem } from '../questionaryItem';
import { QuestionaryItemService } from '../questionaryItem.service';
import { QuestionaryItemMasterUI } from '../master/questionaryItem.master';
import { QuestionaryItemEditUI } from '../edit/questionaryItem.edit';
import { QuestionaryItemDeleteUI } from '../delete/questionaryItem.delete';

import { QuestionaryType } from '../../QuestionaryType/questionaryType';
import { AnswerType } from '../../AnswerType/answerType';
import { AnswerTypeEditUI } from '../../AnswerType/edit/answerType.edit';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { CoachingQuestionaryAnsweredEditUI } from '../../CoachingQuestionaryAnswered/edit/coachingQuestionaryAnswered.edit';
import { CoachingQuestionaryAnswered } from '../../CoachingQuestionaryAnswered/coachingQuestionaryAnswered';



@Component({
  selector: 'lad-questionaryItem-index',
  templateUrl: './questionaryItem.index.html',
  styleUrls: ['./questionaryItem.index.css']
})
export class QuestionaryItemIndexUI extends IndexView<QuestionaryItem> implements AfterViewInit, IIndexView<QuestionaryItem> {

  constructor(private questionaryItemService: QuestionaryItemService) {
    super(questionaryItemService);
    this.filterInstance = QuestionaryItem.SeekInstance();
    this.currentInstance = new QuestionaryItem();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region CoachingQuestionaryAnswered

  public coachingQuestionaryAnswered_Clicked(coachingQuestionaryAnsweredEditUI: CoachingQuestionaryAnsweredEditUI) {
    coachingQuestionaryAnsweredEditUI.QuestionaryItem = this.currentInstance;
    coachingQuestionaryAnsweredEditUI.ShowDialog(new CoachingQuestionaryAnswered());
  }
                    
  public coachingQuestionaryAnsweredEditUI_Closed(coachingQuestionaryAnswered: CoachingQuestionaryAnswered) {
    if (!coachingQuestionaryAnswered)
      return;
    this.onRefresh();
  }
  
  //#endregion CoachingQuestionaryAnswered


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(questionaryItemEditUI: QuestionaryItemEditUI){
    questionaryItemEditUI.ShowDialog(new QuestionaryItem());
  }

  resetFilter() {
    this.filterInstance = QuestionaryItem.SeekInstance();
    
    
  }

  public onEditModalClosed(questionaryItem: QuestionaryItem) {
    this.onRefresh();
    this.currentInstance = new QuestionaryItem();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}