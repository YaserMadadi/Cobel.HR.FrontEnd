import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { QuestionaryType } from '../questionaryType';
import { QuestionaryTypeService } from '../questionaryType.service';
import { QuestionaryTypeMasterUI } from '../master/questionaryType.master';
import { QuestionaryTypeEditUI } from '../edit/questionaryType.edit';
import { QuestionaryTypeDeleteUI } from '../delete/questionaryType.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { CoachingQuestionaryEditUI } from '../../CoachingQuestionary/edit/coachingQuestionary.edit';
import { CoachingQuestionary } from '../../CoachingQuestionary/coachingQuestionary';
import { QuestionaryItemEditUI } from '../../QuestionaryItem/edit/questionaryItem.edit';
import { QuestionaryItem } from '../../QuestionaryItem/questionaryItem';



@Component({
  selector: 'lad-questionaryType-index',
  templateUrl: './questionaryType.index.html',
  styleUrls: ['./questionaryType.index.css']
})
export class QuestionaryTypeIndexUI extends IndexView<QuestionaryType> implements AfterViewInit, IIndexView<QuestionaryType> {

  constructor(private questionaryTypeService: QuestionaryTypeService) {
    super(questionaryTypeService);
    this.filterInstance = QuestionaryType.SeekInstance();
    this.currentInstance = new QuestionaryType();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region CoachingQuestionary

  public coachingQuestionary_Clicked(coachingQuestionaryEditUI: CoachingQuestionaryEditUI) {
    coachingQuestionaryEditUI.QuestionaryType = this.currentInstance;
    coachingQuestionaryEditUI.ShowDialog(new CoachingQuestionary());
  }
                    
  public coachingQuestionaryEditUI_Closed(coachingQuestionary: CoachingQuestionary) {
    if (!coachingQuestionary)
      return;
    this.onRefresh();
  }
  
  //#endregion CoachingQuestionary

  //#region QuestionaryItem

  public questionaryItem_Clicked(questionaryItemEditUI: QuestionaryItemEditUI) {
    questionaryItemEditUI.QuestionaryType = this.currentInstance;
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

  public onAdd(questionaryTypeEditUI: QuestionaryTypeEditUI){
    questionaryTypeEditUI.ShowDialog(new QuestionaryType());
  }

  resetFilter() {
    this.filterInstance = QuestionaryType.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(questionaryType: QuestionaryType) {
    this.onRefresh();
    this.currentInstance = new QuestionaryType();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}