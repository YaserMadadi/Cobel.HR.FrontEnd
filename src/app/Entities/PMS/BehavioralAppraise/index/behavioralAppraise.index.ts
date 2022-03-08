import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { BehavioralAppraise } from '../behavioralAppraise';
import { BehavioralAppraiseService } from '../behavioralAppraise.service';
import { BehavioralAppraiseMasterUI } from '../master/behavioralAppraise.master';
import { BehavioralAppraiseEditUI } from '../edit/behavioralAppraise.edit';
import { BehavioralAppraiseDeleteUI } from '../delete/behavioralAppraise.delete';

import { BehavioralKPI } from '../../BehavioralKPI/behavioralKPI';
import { BehavioralKPIEditUI } from '../../BehavioralKPI/edit/behavioralKPI.edit';
import { AppraiseType } from '../../../Base.PMS/AppraiseType/appraiseType';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';





import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'pms-behavioralAppraise-index',
  templateUrl: './behavioralAppraise.index.html',
  styleUrls: ['./behavioralAppraise.index.css']
})
export class BehavioralAppraiseIndexUI extends IndexView<BehavioralAppraise> implements AfterViewInit, IIndexView<BehavioralAppraise> {

  constructor(private behavioralAppraiseService: BehavioralAppraiseService) {
    super(behavioralAppraiseService);
    this.filterInstance = BehavioralAppraise.SeekInstance();
    this.currentInstance = new BehavioralAppraise();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(behavioralAppraiseEditUI: BehavioralAppraiseEditUI){
    behavioralAppraiseEditUI.ShowDialog(new BehavioralAppraise());
  }

  resetFilter() {
    this.filterInstance = BehavioralAppraise.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(behavioralAppraise: BehavioralAppraise) {
    this.onRefresh();
    this.currentInstance = new BehavioralAppraise();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}