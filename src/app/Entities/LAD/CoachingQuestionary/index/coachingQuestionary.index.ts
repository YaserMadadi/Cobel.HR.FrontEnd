import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { CoachingQuestionary } from '../coachingQuestionary';
import { CoachingQuestionaryService } from '../coachingQuestionary.service';
import { CoachingQuestionaryMasterUI } from '../master/coachingQuestionary.master';
import { CoachingQuestionaryEditUI } from '../edit/coachingQuestionary.edit';
import { CoachingQuestionaryDeleteUI } from '../delete/coachingQuestionary.delete';

import { QuestionaryType } from '../../QuestionaryType/questionaryType';
import { Assessment } from '../../Assessment/assessment';
import { AssessmentEditUI } from '../../Assessment/edit/assessment.edit';
import { Person } from '../../../HR/Person/person';
import { PersonEditUI } from '../../../HR/Person/edit/person.edit';



import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { CoachingQuestionaryDetailEditUI } from '../../CoachingQuestionaryDetail/edit/coachingQuestionaryDetail.edit';
import { CoachingQuestionaryDetail } from '../../CoachingQuestionaryDetail/coachingQuestionaryDetail';
import { CoachingQuestionaryAnsweredEditUI } from '../../CoachingQuestionaryAnswered/edit/coachingQuestionaryAnswered.edit';
import { CoachingQuestionaryAnswered } from '../../CoachingQuestionaryAnswered/coachingQuestionaryAnswered';



@Component({
  selector: 'lad-coachingQuestionary-index',
  templateUrl: './coachingQuestionary.index.html',
  styleUrls: ['./coachingQuestionary.index.css']
})
export class CoachingQuestionaryIndexUI extends IndexView<CoachingQuestionary> implements AfterViewInit, IIndexView<CoachingQuestionary> {

  constructor(private coachingQuestionaryService: CoachingQuestionaryService) {
    super(coachingQuestionaryService);
    this.filterInstance = CoachingQuestionary.SeekInstance();
    this.currentInstance = new CoachingQuestionary();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region CoachingQuestionaryDetail

  public coachingQuestionaryDetail_Clicked(coachingQuestionaryDetailEditUI: CoachingQuestionaryDetailEditUI) {
    coachingQuestionaryDetailEditUI.CoachingQuestionary = this.currentInstance;
    coachingQuestionaryDetailEditUI.ShowDialog(new CoachingQuestionaryDetail());
  }
                    
  public coachingQuestionaryDetailEditUI_Closed(coachingQuestionaryDetail: CoachingQuestionaryDetail) {
    if (!coachingQuestionaryDetail)
      return;
    this.onRefresh();
  }
  
  //#endregion CoachingQuestionaryDetail

  //#region CoachingQuestionaryAnswered

  public coachingQuestionaryAnswered_Clicked(coachingQuestionaryAnsweredEditUI: CoachingQuestionaryAnsweredEditUI) {
    coachingQuestionaryAnsweredEditUI.CoachingQuestionary = this.currentInstance;
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

  public onAdd(coachingQuestionaryEditUI: CoachingQuestionaryEditUI){
    coachingQuestionaryEditUI.ShowDialog(new CoachingQuestionary());
  }

  resetFilter() {
    this.filterInstance = CoachingQuestionary.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(coachingQuestionary: CoachingQuestionary) {
    this.onRefresh();
    this.currentInstance = new CoachingQuestionary();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}