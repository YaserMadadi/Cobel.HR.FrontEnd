import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { VisionApproved } from '../visionApproved';
import { VisionApprovedService } from '../visionApproved.service';
import { VisionApprovedMasterUI } from '../master/visionApproved.master';
import { VisionApprovedEditUI } from '../edit/visionApproved.edit';
import { VisionApprovedDeleteUI } from '../delete/visionApproved.delete';

import { Vision } from '../../Vision/vision';
import { VisionEditUI } from '../../Vision/edit/vision.edit';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';
import { ApprovementType } from '../../../Base.PMS/ApprovementType/approvementType';



import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'pms-visionApproved-index',
  templateUrl: './visionApproved.index.html',
  styleUrls: ['./visionApproved.index.css']
})
export class VisionApprovedIndexUI extends IndexView<VisionApproved> implements AfterViewInit, IIndexView<VisionApproved> {

  constructor(private visionApprovedService: VisionApprovedService) {
    super(visionApprovedService);
    this.filterInstance = VisionApproved.SeekInstance();
    this.currentInstance = new VisionApproved();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(visionApprovedEditUI: VisionApprovedEditUI){
    visionApprovedEditUI.ShowDialog(new VisionApproved());
  }

  resetFilter() {
    this.filterInstance = VisionApproved.SeekInstance();
    
    
  }

  public onEditModalClosed(visionApproved: VisionApproved) {
    this.onRefresh();
    this.currentInstance = new VisionApproved();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}