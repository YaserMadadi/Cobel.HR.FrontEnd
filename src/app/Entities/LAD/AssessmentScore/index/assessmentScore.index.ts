import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { AssessmentScore } from '../assessmentScore';
import { AssessmentScoreService } from '../assessmentScore.service';
import { AssessmentScoreMasterUI } from '../master/assessmentScore.master';
import { AssessmentScoreEditUI } from '../edit/assessmentScore.edit';
import { AssessmentScoreDeleteUI } from '../delete/assessmentScore.delete';

import { Assessment } from '../../Assessment/assessment';
import { AssessmentEditUI } from '../../Assessment/edit/assessment.edit';
import { CompetencyItem } from '../../../PMS/CompetencyItem/competencyItem';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'lad-assessmentScore-index',
  templateUrl: './assessmentScore.index.html',
  styleUrls: ['./assessmentScore.index.css']
})
export class AssessmentScoreIndexUI extends IndexView<AssessmentScore> implements AfterViewInit, IIndexView<AssessmentScore> {

  constructor(private assessmentScoreService: AssessmentScoreService) {
    super(assessmentScoreService);
    this.filterInstance = AssessmentScore.SeekInstance();
    this.currentInstance = new AssessmentScore();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(assessmentScoreEditUI: AssessmentScoreEditUI){
    assessmentScoreEditUI.ShowDialog(new AssessmentScore());
  }

  resetFilter() {
    this.filterInstance = AssessmentScore.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(assessmentScore: AssessmentScore) {
    this.onRefresh();
    this.currentInstance = new AssessmentScore();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}