import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { AssessmentType } from '../assessmentType';
import { AssessmentTypeService } from '../assessmentType.service';
import { AssessmentTypeMasterUI } from '../master/assessmentType.master';
import { AssessmentTypeEditUI } from '../edit/assessmentType.edit';
import { AssessmentTypeDeleteUI } from '../delete/assessmentType.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { AssessmentEditUI } from '../../Assessment/edit/assessment.edit';
import { Assessment } from '../../Assessment/assessment';



@Component({
  selector: 'lad-assessmentType-index',
  templateUrl: './assessmentType.index.html',
  styleUrls: ['./assessmentType.index.css']
})
export class AssessmentTypeIndexUI extends IndexView<AssessmentType> implements AfterViewInit, IIndexView<AssessmentType> {

  constructor(private assessmentTypeService: AssessmentTypeService) {
    super(assessmentTypeService);
    this.filterInstance = AssessmentType.SeekInstance();
    this.currentInstance = new AssessmentType();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region Assessment

  public assessment_Clicked(assessmentEditUI: AssessmentEditUI) {
    assessmentEditUI.AssessmentType = this.currentInstance;
    assessmentEditUI.ShowDialog(new Assessment());
  }
                    
  public assessmentEditUI_Closed(assessment: Assessment) {
    if (!assessment)
      return;
    this.onRefresh();
  }
  
  //#endregion Assessment


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(assessmentTypeEditUI: AssessmentTypeEditUI){
    assessmentTypeEditUI.ShowDialog(new AssessmentType());
  }

  resetFilter() {
    this.filterInstance = AssessmentType.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(assessmentType: AssessmentType) {
    this.onRefresh();
    this.currentInstance = new AssessmentType();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}