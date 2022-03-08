import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { QualitativeAppraise } from '../qualitativeAppraise';
import { QualitativeAppraiseService } from '../qualitativeAppraise.service';
import { QualitativeAppraiseMasterUI } from '../master/qualitativeAppraise.master';
import { QualitativeAppraiseEditUI } from '../edit/qualitativeAppraise.edit';
import { QualitativeAppraiseDeleteUI } from '../delete/qualitativeAppraise.delete';

import { QualitativeKPI } from '../../QualitativeKPI/qualitativeKPI';
import { QualitativeKPIEditUI } from '../../QualitativeKPI/edit/qualitativeKPI.edit';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';
import { AppraiseType } from '../../../Base.PMS/AppraiseType/appraiseType';




import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'pms-qualitativeAppraise-index',
  templateUrl: './qualitativeAppraise.index.html',
  styleUrls: ['./qualitativeAppraise.index.css']
})
export class QualitativeAppraiseIndexUI extends IndexView<QualitativeAppraise> implements AfterViewInit, IIndexView<QualitativeAppraise> {

  constructor(private qualitativeAppraiseService: QualitativeAppraiseService) {
    super(qualitativeAppraiseService);
    this.filterInstance = QualitativeAppraise.SeekInstance();
    this.currentInstance = new QualitativeAppraise();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(qualitativeAppraiseEditUI: QualitativeAppraiseEditUI){
    qualitativeAppraiseEditUI.ShowDialog(new QualitativeAppraise());
  }

  resetFilter() {
    this.filterInstance = QualitativeAppraise.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(qualitativeAppraise: QualitativeAppraise) {
    this.onRefresh();
    this.currentInstance = new QualitativeAppraise();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}