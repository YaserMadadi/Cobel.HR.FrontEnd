import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Subject } from '../subject';
import { SubjectService } from '../subject.service';
import { SubjectMasterUI } from '../master/subject.master';
import { SubjectEditUI } from '../edit/subject.edit';
import { SubjectDeleteUI } from '../delete/subject.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { IndividualDevelopmentPlanEditUI } from '../../../PMS/IndividualDevelopmentPlan/edit/individualDevelopmentPlan.edit';
import { IndividualDevelopmentPlan } from '../../../PMS/IndividualDevelopmentPlan/individualDevelopmentPlan';



@Component({
  selector: 'base-pms-subject-index',
  templateUrl: './subject.index.html',
  styleUrls: ['./subject.index.css']
})
export class SubjectIndexUI extends IndexView<Subject> implements AfterViewInit, IIndexView<Subject> {

  constructor(private subjectService: SubjectService) {
    super(subjectService);
    this.filterInstance = Subject.SeekInstance();
    this.currentInstance = new Subject();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region IndividualDevelopmentPlan

  public individualDevelopmentPlan_Clicked(individualDevelopmentPlanEditUI: IndividualDevelopmentPlanEditUI) {
    individualDevelopmentPlanEditUI.Subject = this.currentInstance;
    individualDevelopmentPlanEditUI.ShowDialog(new IndividualDevelopmentPlan());
  }
                    
  public individualDevelopmentPlanEditUI_Closed(individualDevelopmentPlan: IndividualDevelopmentPlan) {
    if (!individualDevelopmentPlan)
      return;
    this.onRefresh();
  }
  
  //#endregion IndividualDevelopmentPlan


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(subjectEditUI: SubjectEditUI){
    subjectEditUI.ShowDialog(new Subject());
  }

  resetFilter() {
    this.filterInstance = Subject.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(subject: Subject) {
    this.onRefresh();
    this.currentInstance = new Subject();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}