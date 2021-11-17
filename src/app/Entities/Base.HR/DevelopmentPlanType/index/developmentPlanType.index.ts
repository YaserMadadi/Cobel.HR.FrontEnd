

import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { DevelopmentPlanType } from '../developmentPlanType';
import { DevelopmentPlanTypeService } from '../developmentPlanType.service';
import { DevelopmentPlanTypeMasterUI } from '../master/developmentPlanType.master';
import { DevelopmentPlanTypeEditUI } from '../edit/developmentPlanType.edit';
import { DevelopmentPlanTypeDeleteUI } from '../delete/developmentPlanType.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'base-hr-developmentPlanType-index',
  templateUrl: './developmentPlanType.index.html',
  styleUrls: ['./developmentPlanType.index.css']
})
export class DevelopmentPlanTypeIndexUI extends IndexView<DevelopmentPlanType> implements AfterViewInit, IIndexView<DevelopmentPlanType> {

  constructor(private developmentPlanTypeService: DevelopmentPlanTypeService) {
    super(developmentPlanTypeService);
    this.filterInstance = DevelopmentPlanType.SeekInstance();
    this.currentInstance = new DevelopmentPlanType();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(developmentPlanTypeEditUI: DevelopmentPlanTypeEditUI){
    developmentPlanTypeEditUI.ShowDialog(new DevelopmentPlanType());
  }

  resetFilter() {
    this.filterInstance = DevelopmentPlanType.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(developmentPlanType: DevelopmentPlanType) {
    this.onRefresh();
    this.currentInstance = new DevelopmentPlanType();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}
