import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Assessor } from '../assessor';
import { AssessorService } from '../assessor.service';
import { AssessorMasterUI } from '../master/assessor.master';
import { AssessorEditUI } from '../edit/assessor.edit';
import { AssessorDeleteUI } from '../delete/assessor.delete';

import { Gender } from '../../../Base/Gender/gender';
import { GenderEditUI } from '../../../Base/Gender/edit/gender.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { AssessorConnectionLineEditUI } from '../../AssessorConnectionLine/edit/assessorConnectionLine.edit';
import { AssessorConnectionLine } from '../../AssessorConnectionLine/assessorConnectionLine';
import { AssessmentEditUI } from '../../Assessment/edit/assessment.edit';
import { Assessment } from '../../Assessment/assessment';



@Component({
  selector: 'lad-assessor-index',
  templateUrl: './assessor.index.html',
  styleUrls: ['./assessor.index.css']
})
export class AssessorIndexUI extends IndexView<Assessor> implements AfterViewInit, IIndexView<Assessor> {

  constructor(private assessorService: AssessorService) {
    super(assessorService);
    this.filterInstance = Assessor.SeekInstance();
    this.currentInstance = new Assessor();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region AssessorConnectionLine

  public assessorConnectionLine_Clicked(assessorConnectionLineEditUI: AssessorConnectionLineEditUI) {
    assessorConnectionLineEditUI.Assessor = this.currentInstance;
    assessorConnectionLineEditUI.ShowDialog(new AssessorConnectionLine());
  }
                    
  public assessorConnectionLineEditUI_Closed(assessorConnectionLine: AssessorConnectionLine) {
    if (!assessorConnectionLine)
      return;
    this.onRefresh();
  }
  
  //#endregion AssessorConnectionLine

  //#region Assessment

  public assessment_Clicked(assessmentEditUI: AssessmentEditUI) {
    assessmentEditUI.Assessor = this.currentInstance;
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

  public onAdd(assessorEditUI: AssessorEditUI){
    assessorEditUI.ShowDialog(new Assessor());
  }

  resetFilter() {
    this.filterInstance = Assessor.SeekInstance();
    
    
  }

  public onEditModalClosed(assessor: Assessor) {
    this.onRefresh();
    this.currentInstance = new Assessor();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}