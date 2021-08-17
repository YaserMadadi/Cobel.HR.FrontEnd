import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { HoldingSection } from '../holdingSection';
import { HoldingSectionService } from '../holdingSection.service';
import { HoldingSectionMasterUI } from '../master/holdingSection.master';
import { HoldingSectionEditUI } from '../edit/holdingSection.edit';
import { HoldingSectionDeleteUI } from '../delete/holdingSection.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { EmployeeDetailEditUI } from '../../../HR/EmployeeDetail/edit/employeeDetail.edit';
import { EmployeeDetail } from '../../../HR/EmployeeDetail/employeeDetail';



@Component({
  selector: 'base-holdingSection-index',
  templateUrl: './holdingSection.index.html',
  styleUrls: ['./holdingSection.index.css']
})
export class HoldingSectionIndexUI extends IndexView<HoldingSection> implements AfterViewInit, IIndexView<HoldingSection> {

  constructor(private holdingSectionService: HoldingSectionService) {
    super(holdingSectionService);
    this.filterInstance = HoldingSection.SeekInstance();
    this.currentInstance = new HoldingSection();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region EmployeeDetail

  public employeeDetail_Clicked(employeeDetailEditUI: EmployeeDetailEditUI) {
    employeeDetailEditUI.HoldingSection = this.currentInstance;
    employeeDetailEditUI.ShowDialog(new EmployeeDetail());
  }
                    
  public employeeDetailEditUI_Closed(employeeDetail: EmployeeDetail) {
    if (!employeeDetail)
      return;
    this.onRefresh();
  }
  
  //#endregion EmployeeDetail



  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(holdingSectionEditUI: HoldingSectionEditUI){
    holdingSectionEditUI.ShowDialog(new HoldingSection());
  }

  resetFilter() {
    this.filterInstance = HoldingSection.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(holdingSection: HoldingSection) {
    this.onRefresh();
    this.currentInstance = new HoldingSection();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}