import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { DevelopmentPlanPriority } from '../developmentPlanPriority';
import { DevelopmentPlanPriorityService } from '../developmentPlanPriority.service';
import { DevelopmentPlanPriorityMasterUI } from '../master/developmentPlanPriority.master';
import { DevelopmentPlanPriorityEditUI } from '../edit/developmentPlanPriority.edit';
import { DevelopmentPlanPriorityDeleteUI } from '../delete/developmentPlanPriority.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'base.pms-developmentPlanPriority-index',
  templateUrl: './developmentPlanPriority.index.html',
  styleUrls: ['./developmentPlanPriority.index.css']
})
export class DevelopmentPlanPriorityIndexUI extends IndexView<DevelopmentPlanPriority> implements AfterViewInit, IIndexView<DevelopmentPlanPriority> {

  constructor(private developmentPlanPriorityService: DevelopmentPlanPriorityService) {
    super(developmentPlanPriorityService);
    this.filterInstance = DevelopmentPlanPriority.SeekInstance();
    this.currentInstance = new DevelopmentPlanPriority();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(developmentPlanPriorityEditUI: DevelopmentPlanPriorityEditUI){
    developmentPlanPriorityEditUI.ShowDialog(new DevelopmentPlanPriority());
  }

  resetFilter() {
    this.filterInstance = DevelopmentPlanPriority.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(developmentPlanPriority: DevelopmentPlanPriority) {
    this.onRefresh();
    this.currentInstance = new DevelopmentPlanPriority();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}