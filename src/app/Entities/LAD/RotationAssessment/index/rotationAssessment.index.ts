import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { RotationAssessment } from '../rotationAssessment';
import { RotationAssessmentService } from '../rotationAssessment.service';
import { RotationAssessmentMasterUI } from '../master/rotationAssessment.master';
import { RotationAssessmentEditUI } from '../edit/rotationAssessment.edit';
import { RotationAssessmentDeleteUI } from '../delete/rotationAssessment.delete';

import { Assessment } from '../../Assessment/assessment';
import { AssessmentEditUI } from '../../Assessment/edit/assessment.edit';
import { Position } from '../../../HR/Position/position';
import { PositionEditUI } from '../../../HR/Position/edit/position.edit';



import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'lad-rotationAssessment-index',
  templateUrl: './rotationAssessment.index.html',
  styleUrls: ['./rotationAssessment.index.css']
})
export class RotationAssessmentIndexUI extends IndexView<RotationAssessment> implements AfterViewInit, IIndexView<RotationAssessment> {

  constructor(private rotationAssessmentService: RotationAssessmentService) {
    super(rotationAssessmentService);
    this.filterInstance = RotationAssessment.SeekInstance();
    this.currentInstance = new RotationAssessment();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(rotationAssessmentEditUI: RotationAssessmentEditUI){
    rotationAssessmentEditUI.ShowDialog(new RotationAssessment());
  }

  resetFilter() {
    this.filterInstance = RotationAssessment.SeekInstance();
    
    
  }

  public onEditModalClosed(rotationAssessment: RotationAssessment) {
    this.onRefresh();
    this.currentInstance = new RotationAssessment();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}