import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { CoachingQuestionaryAnswered } from '../coachingQuestionaryAnswered';
import { CoachingQuestionaryAnsweredService } from '../coachingQuestionaryAnswered.service';
import { CoachingQuestionaryAnsweredMasterUI } from '../master/coachingQuestionaryAnswered.master';
import { CoachingQuestionaryAnsweredEditUI } from '../edit/coachingQuestionaryAnswered.edit';
import { CoachingQuestionaryAnsweredDeleteUI } from '../delete/coachingQuestionaryAnswered.delete';

import { CoachingQuestionary } from '../../CoachingQuestionary/coachingQuestionary';
import { CoachingQuestionaryEditUI } from '../../CoachingQuestionary/edit/coachingQuestionary.edit';
import { QuestionaryItem } from '../../QuestionaryItem/questionaryItem';
import { QuestionaryItemEditUI } from '../../QuestionaryItem/edit/questionaryItem.edit';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'lad-coachingQuestionaryAnswered-index',
  templateUrl: './coachingQuestionaryAnswered.index.html',
  styleUrls: ['./coachingQuestionaryAnswered.index.css']
})
export class CoachingQuestionaryAnsweredIndexUI extends IndexView<CoachingQuestionaryAnswered> implements AfterViewInit, IIndexView<CoachingQuestionaryAnswered> {

  constructor(private coachingQuestionaryAnsweredService: CoachingQuestionaryAnsweredService) {
    super(coachingQuestionaryAnsweredService);
    this.filterInstance = CoachingQuestionaryAnswered.SeekInstance();
    this.currentInstance = new CoachingQuestionaryAnswered();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(coachingQuestionaryAnsweredEditUI: CoachingQuestionaryAnsweredEditUI){
    coachingQuestionaryAnsweredEditUI.ShowDialog(new CoachingQuestionaryAnswered());
  }

  resetFilter() {
    this.filterInstance = CoachingQuestionaryAnswered.SeekInstance();
    
    
  }

  public onEditModalClosed(coachingQuestionaryAnswered: CoachingQuestionaryAnswered) {
    this.onRefresh();
    this.currentInstance = new CoachingQuestionaryAnswered();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}