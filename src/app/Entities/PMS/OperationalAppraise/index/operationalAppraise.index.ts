import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { OperationalAppraise } from '../operationalAppraise';
import { OperationalAppraiseService } from '../operationalAppraise.service';
import { OperationalAppraiseMasterUI } from '../master/operationalAppraise.master';
import { OperationalAppraiseEditUI } from '../edit/operationalAppraise.edit';
import { OperationalAppraiseDeleteUI } from '../delete/operationalAppraise.delete';

import { TargetSetting } from '../../TargetSetting/targetSetting';
import { TargetSettingEditUI } from '../../TargetSetting/edit/targetSetting.edit';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';
import { ScoreCell } from '../../ScoreCell/scoreCell';
import { ScoreCellEditUI } from '../../ScoreCell/edit/scoreCell.edit';



import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'pms-operationalAppraise-index',
  templateUrl: './operationalAppraise.index.html',
  styleUrls: ['./operationalAppraise.index.css']
})
export class OperationalAppraiseIndexUI extends IndexView<OperationalAppraise> implements AfterViewInit, IIndexView<OperationalAppraise> {

  constructor(private operationalAppraiseService: OperationalAppraiseService) {
    super(operationalAppraiseService);
    this.filterInstance = OperationalAppraise.SeekInstance();
    this.currentInstance = new OperationalAppraise();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(operationalAppraiseEditUI: OperationalAppraiseEditUI){
    operationalAppraiseEditUI.ShowDialog(new OperationalAppraise());
  }

  resetFilter() {
    this.filterInstance = OperationalAppraise.SeekInstance();
    
    
  }

  public onEditModalClosed(operationalAppraise: OperationalAppraise) {
    this.onRefresh();
    this.currentInstance = new OperationalAppraise();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}