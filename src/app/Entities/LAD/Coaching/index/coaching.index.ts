import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Coaching } from '../coaching';
import { CoachingService } from '../coaching.service';
import { CoachingMasterUI } from '../master/coaching.master';
import { CoachingEditUI } from '../edit/coaching.edit';
import { CoachingDeleteUI } from '../delete/coaching.delete';

import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';
import { Coach } from '../../Coach/coach';
import { CoachEditUI } from '../../Coach/edit/coach.edit';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { CoachingSessionEditUI } from '../../CoachingSession/edit/coachingSession.edit';
import { CoachingSession } from '../../CoachingSession/coachingSession';
import { AssessmentCoachingEditUI } from '../../AssessmentCoaching/edit/assessmentCoaching.edit';
import { AssessmentCoaching } from '../../AssessmentCoaching/assessmentCoaching';



@Component({
  selector: 'lad-coaching-index',
  templateUrl: './coaching.index.html',
  styleUrls: ['./coaching.index.css']
})
export class CoachingIndexUI extends IndexView<Coaching> implements AfterViewInit, IIndexView<Coaching> {

  constructor(private coachingService: CoachingService) {
    super(coachingService);
    this.filterInstance = Coaching.SeekInstance();
    this.currentInstance = new Coaching();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region CoachingSession

  public coachingSession_Clicked(coachingSessionEditUI: CoachingSessionEditUI) {
    coachingSessionEditUI.Coaching = this.currentInstance;
    coachingSessionEditUI.ShowDialog(new CoachingSession());
  }
                    
  public coachingSessionEditUI_Closed(coachingSession: CoachingSession) {
    if (!coachingSession)
      return;
    this.onRefresh();
  }
  
  //#endregion CoachingSession

  //#region AssessmentCoaching

  public assessmentCoaching_Clicked(assessmentCoachingEditUI: AssessmentCoachingEditUI) {
    assessmentCoachingEditUI.Coaching = this.currentInstance;
    assessmentCoachingEditUI.ShowDialog(new AssessmentCoaching());
  }
                    
  public assessmentCoachingEditUI_Closed(assessmentCoaching: AssessmentCoaching) {
    if (!assessmentCoaching)
      return;
    this.onRefresh();
  }
  
  //#endregion AssessmentCoaching


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(coachingEditUI: CoachingEditUI){
    coachingEditUI.ShowDialog(new Coaching());
  }

  resetFilter() {
    this.filterInstance = Coaching.SeekInstance();
    
    
  }

  public onEditModalClosed(coaching: Coaching) {
    this.onRefresh();
    this.currentInstance = new Coaching();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}