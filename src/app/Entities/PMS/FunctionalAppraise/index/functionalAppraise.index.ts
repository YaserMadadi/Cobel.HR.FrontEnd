import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { FunctionalAppraise } from '../functionalAppraise';
import { FunctionalAppraiseService } from '../functionalAppraise.service';
import { FunctionalAppraiseMasterUI } from '../master/functionalAppraise.master';
import { FunctionalAppraiseEditUI } from '../edit/functionalAppraise.edit';
import { FunctionalAppraiseDeleteUI } from '../delete/functionalAppraise.delete';

import { FunctionalKPI } from '../../FunctionalKPI/functionalKPI';
import { FunctionalKPIEditUI } from '../../FunctionalKPI/edit/functionalKPI.edit';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';
import { AppraiseType } from '../../../Base.PMS/AppraiseType/appraiseType';




import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'pms-functionalAppraise-index',
  templateUrl: './functionalAppraise.index.html',
  styleUrls: ['./functionalAppraise.index.css']
})
export class FunctionalAppraiseIndexUI extends IndexView<FunctionalAppraise> implements AfterViewInit, IIndexView<FunctionalAppraise> {

  constructor(private functionalAppraiseService: FunctionalAppraiseService) {
    super(functionalAppraiseService);
    this.filterInstance = FunctionalAppraise.SeekInstance();
    this.currentInstance = new FunctionalAppraise();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(functionalAppraiseEditUI: FunctionalAppraiseEditUI){
    functionalAppraiseEditUI.ShowDialog(new FunctionalAppraise());
  }

  resetFilter() {
    this.filterInstance = FunctionalAppraise.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(functionalAppraise: FunctionalAppraise) {
    this.onRefresh();
    this.currentInstance = new FunctionalAppraise();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}