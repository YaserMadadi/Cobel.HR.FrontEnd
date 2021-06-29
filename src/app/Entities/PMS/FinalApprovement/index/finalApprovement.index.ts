import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { FinalApprovement } from '../finalApprovement';
import { FinalApprovementService } from '../finalApprovement.service';
import { FinalApprovementMasterUI } from '../master/finalApprovement.master';
import { FinalApprovementEditUI } from '../edit/finalApprovement.edit';
import { FinalApprovementDeleteUI } from '../delete/finalApprovement.delete';

import { TargetSetting } from '../../TargetSetting/targetSetting';
import { TargetSettingEditUI } from '../../TargetSetting/edit/targetSetting.edit';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'pms-finalApprovement-index',
  templateUrl: './finalApprovement.index.html',
  styleUrls: ['./finalApprovement.index.css']
})
export class FinalApprovementIndexUI extends IndexView<FinalApprovement> implements AfterViewInit, IIndexView<FinalApprovement> {

  constructor(private finalApprovementService: FinalApprovementService) {
    super(finalApprovementService);
    this.filterInstance = FinalApprovement.SeekInstance();
    this.currentInstance = new FinalApprovement();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(finalApprovementEditUI: FinalApprovementEditUI){
    finalApprovementEditUI.ShowDialog(new FinalApprovement());
  }

  resetFilter() {
    this.filterInstance = FinalApprovement.SeekInstance();
    
    
  }

  public onEditModalClosed(finalApprovement: FinalApprovement) {
    this.onRefresh();
    this.currentInstance = new FinalApprovement();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}