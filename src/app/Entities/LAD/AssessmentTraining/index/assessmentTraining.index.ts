import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { AssessmentTraining } from '../assessmentTraining';
import { AssessmentTrainingService } from '../assessmentTraining.service';
import { AssessmentTrainingMasterUI } from '../master/assessmentTraining.master';
import { AssessmentTrainingEditUI } from '../edit/assessmentTraining.edit';
import { AssessmentTrainingDeleteUI } from '../delete/assessmentTraining.delete';

import { Assessment } from '../../Assessment/assessment';
import { AssessmentEditUI } from '../../Assessment/edit/assessment.edit';
import { YearQuarter } from '../../../Base/YearQuarter/yearQuarter';
import { YearQuarterEditUI } from '../../../Base/YearQuarter/edit/yearQuarter.edit';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'lad-assessmentTraining-index',
  templateUrl: './assessmentTraining.index.html',
  styleUrls: ['./assessmentTraining.index.css']
})
export class AssessmentTrainingIndexUI extends IndexView<AssessmentTraining> implements AfterViewInit, IIndexView<AssessmentTraining> {

  constructor(private assessmentTrainingService: AssessmentTrainingService) {
    super(assessmentTrainingService);
    this.filterInstance = AssessmentTraining.SeekInstance();
    this.currentInstance = new AssessmentTraining();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(assessmentTrainingEditUI: AssessmentTrainingEditUI){
    assessmentTrainingEditUI.ShowDialog(new AssessmentTraining());
  }

  resetFilter() {
    this.filterInstance = AssessmentTraining.SeekInstance();
    
    
  }

  public onEditModalClosed(assessmentTraining: AssessmentTraining) {
    this.onRefresh();
    this.currentInstance = new AssessmentTraining();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}