import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { NonOperationalAppraise } from '../nonOperationalAppraise';
import { NonOperationalAppraiseService } from '../nonOperationalAppraise.service';
import { NonOperationalAppraiseMasterUI } from '../master/nonOperationalAppraise.master';
import { NonOperationalAppraiseEditUI } from '../edit/nonOperationalAppraise.edit';
import { NonOperationalAppraiseDeleteUI } from '../delete/nonOperationalAppraise.delete';

import { TargetSetting } from '../../TargetSetting/targetSetting';
import { TargetSettingEditUI } from '../../TargetSetting/edit/targetSetting.edit';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';
import { ScoreCell } from '../../ScoreCell/scoreCell';
import { ScoreCellEditUI } from '../../ScoreCell/edit/scoreCell.edit';



import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'pms-nonOperationalAppraise-index',
  templateUrl: './nonOperationalAppraise.index.html',
  styleUrls: ['./nonOperationalAppraise.index.css']
})
export class NonOperationalAppraiseIndexUI extends IndexView<NonOperationalAppraise> implements AfterViewInit, IIndexView<NonOperationalAppraise> {

  constructor(private nonOperationalAppraiseService: NonOperationalAppraiseService) {
    super(nonOperationalAppraiseService);
    this.filterInstance = NonOperationalAppraise.SeekInstance();
    this.currentInstance = new NonOperationalAppraise();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(nonOperationalAppraiseEditUI: NonOperationalAppraiseEditUI){
    nonOperationalAppraiseEditUI.ShowDialog(new NonOperationalAppraise());
  }

  resetFilter() {
    this.filterInstance = NonOperationalAppraise.SeekInstance();
    
    
  }

  public onEditModalClosed(nonOperationalAppraise: NonOperationalAppraise) {
    this.onRefresh();
    this.currentInstance = new NonOperationalAppraise();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}