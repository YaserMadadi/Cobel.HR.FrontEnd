import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { ApprovementType } from '../approvementType';
import { ApprovementTypeService } from '../approvementType.service';
import { ApprovementTypeMasterUI } from '../master/approvementType.master';
import { ApprovementTypeEditUI } from '../edit/approvementType.edit';
import { ApprovementTypeDeleteUI } from '../delete/approvementType.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { VisionApprovedEditUI } from '../../../PMS/VisionApproved/edit/visionApproved.edit';
import { VisionApproved } from '../../../PMS/VisionApproved/visionApproved';



@Component({
  selector: 'base.pms-approvementType-index',
  templateUrl: './approvementType.index.html',
  styleUrls: ['./approvementType.index.css']
})
export class ApprovementTypeIndexUI extends IndexView<ApprovementType> implements AfterViewInit, IIndexView<ApprovementType> {

  constructor(private approvementTypeService: ApprovementTypeService) {
    super(approvementTypeService);
    this.filterInstance = ApprovementType.SeekInstance();
    this.currentInstance = new ApprovementType();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region VisionApproved

  public visionApproved_Clicked(visionApprovedEditUI: VisionApprovedEditUI) {
    visionApprovedEditUI.ApprovementType = this.currentInstance;
    visionApprovedEditUI.ShowDialog(new VisionApproved());
  }
                    
  public visionApprovedEditUI_Closed(visionApproved: VisionApproved) {
    if (!visionApproved)
      return;
    this.onRefresh();
  }
  
  //#endregion VisionApproved


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(approvementTypeEditUI: ApprovementTypeEditUI){
    approvementTypeEditUI.ShowDialog(new ApprovementType());
  }

  resetFilter() {
    this.filterInstance = ApprovementType.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(approvementType: ApprovementType) {
    this.onRefresh();
    this.currentInstance = new ApprovementType();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}