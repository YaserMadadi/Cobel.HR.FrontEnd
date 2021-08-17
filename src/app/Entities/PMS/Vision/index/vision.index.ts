import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { Vision } from '../vision';
import { VisionService } from '../vision.service';
import { VisionMasterUI } from '../master/vision.master';
import { VisionEditUI } from '../edit/vision.edit';
import { VisionDeleteUI } from '../delete/vision.delete';

import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { VisionCommentEditUI } from '../../VisionComment/edit/visionComment.edit';
import { VisionComment } from '../../VisionComment/visionComment';
import { VisionApprovedEditUI } from '../../VisionApproved/edit/visionApproved.edit';
import { VisionApproved } from '../../VisionApproved/visionApproved';
import { IndividualDevelopmentPlanEditUI } from '../../IndividualDevelopmentPlan/edit/individualDevelopmentPlan.edit';
import { IndividualDevelopmentPlan } from '../../IndividualDevelopmentPlan/individualDevelopmentPlan';



@Component({
  selector: 'pms-vision-index',
  templateUrl: './vision.index.html',
  styleUrls: ['./vision.index.css']
})
export class VisionIndexUI extends IndexView<Vision> implements AfterViewInit, IIndexView<Vision> {

  constructor(private visionService: VisionService) {
    super(visionService);
    this.filterInstance = Vision.SeekInstance();
    this.currentInstance = new Vision();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region VisionComment

  public visionComment_Clicked(visionCommentEditUI: VisionCommentEditUI) {
    visionCommentEditUI.Vision = this.currentInstance;
    visionCommentEditUI.ShowDialog(new VisionComment());
  }
                    
  public visionCommentEditUI_Closed(visionComment: VisionComment) {
    if (!visionComment)
      return;
    this.onRefresh();
  }
  
  //#endregion VisionComment

  //#region VisionApproved

  public visionApproved_Clicked(visionApprovedEditUI: VisionApprovedEditUI) {
    visionApprovedEditUI.Vision = this.currentInstance;
    visionApprovedEditUI.ShowDialog(new VisionApproved());
  }
                    
  public visionApprovedEditUI_Closed(visionApproved: VisionApproved) {
    if (!visionApproved)
      return;
    this.onRefresh();
  }
  
  //#endregion VisionApproved

  //#region IndividualDevelopmentPlan

  public individualDevelopmentPlan_Clicked(individualDevelopmentPlanEditUI: IndividualDevelopmentPlanEditUI) {
    individualDevelopmentPlanEditUI.Vision = this.currentInstance;
    individualDevelopmentPlanEditUI.ShowDialog(new IndividualDevelopmentPlan());
  }
                    
  public individualDevelopmentPlanEditUI_Closed(individualDevelopmentPlan: IndividualDevelopmentPlan) {
    if (!individualDevelopmentPlan)
      return;
    this.onRefresh();
  }
  
  //#endregion IndividualDevelopmentPlan


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(visionEditUI: VisionEditUI){
    visionEditUI.ShowDialog(new Vision());
  }

  resetFilter() {
    this.filterInstance = Vision.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(vision: Vision) {
    this.onRefresh();
    this.currentInstance = new Vision();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}