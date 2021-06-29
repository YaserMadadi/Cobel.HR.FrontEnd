import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { AssessmentCoaching } from '../assessmentCoaching';
import { AssessmentCoachingService } from '../assessmentCoaching.service';
import { AssessmentCoachingMasterUI } from '../master/assessmentCoaching.master';
import { AssessmentCoachingEditUI } from '../edit/assessmentCoaching.edit';
import { AssessmentCoachingDeleteUI } from '../delete/assessmentCoaching.delete';

import { Assessment } from '../../Assessment/assessment';
import { AssessmentEditUI } from '../../Assessment/edit/assessment.edit';
import { Coaching } from '../../Coaching/coaching';
import { CoachingEditUI } from '../../Coaching/edit/coaching.edit';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'lad-assessmentCoaching-index',
  templateUrl: './assessmentCoaching.index.html',
  styleUrls: ['./assessmentCoaching.index.css']
})
export class AssessmentCoachingIndexUI extends IndexView<AssessmentCoaching> implements AfterViewInit, IIndexView<AssessmentCoaching> {

  constructor(private assessmentCoachingService: AssessmentCoachingService) {
    super(assessmentCoachingService);
    this.filterInstance = AssessmentCoaching.SeekInstance();
    this.currentInstance = new AssessmentCoaching();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(assessmentCoachingEditUI: AssessmentCoachingEditUI){
    assessmentCoachingEditUI.ShowDialog(new AssessmentCoaching());
  }

  resetFilter() {
    this.filterInstance = AssessmentCoaching.SeekInstance();
    
    
  }

  public onEditModalClosed(assessmentCoaching: AssessmentCoaching) {
    this.onRefresh();
    this.currentInstance = new AssessmentCoaching();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}