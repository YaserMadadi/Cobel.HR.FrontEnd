import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { PositionAssignment } from '../positionAssignment';
import { PositionAssignmentService } from '../positionAssignment.service';
import { PositionAssignmentMasterUI } from '../master/positionAssignment.master';
import { PositionAssignmentEditUI } from '../edit/positionAssignment.edit';
import { PositionAssignmentDeleteUI } from '../delete/positionAssignment.delete';

import { Employee } from '../../Employee/employee';
import { EmployeeEditUI } from '../../Employee/edit/employee.edit';
import { Position } from '../../Position/position';
import { PositionEditUI } from '../../Position/edit/position.edit';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { PositionAssignmentRepealEditUI } from '../../PositionAssignmentRepeal/edit/positionAssignmentRepeal.edit';
import { PositionAssignmentRepeal } from '../../PositionAssignmentRepeal/positionAssignmentRepeal';



@Component({
  selector: 'hr-positionAssignment-index',
  templateUrl: './positionAssignment.index.html',
  styleUrls: ['./positionAssignment.index.css']
})
export class PositionAssignmentIndexUI extends IndexView<PositionAssignment> implements AfterViewInit, IIndexView<PositionAssignment> {

  constructor(private positionAssignmentService: PositionAssignmentService) {
    super(positionAssignmentService);
    this.filterInstance = PositionAssignment.SeekInstance();
    this.currentInstance = new PositionAssignment();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region PositionAssignmentRepeal

  public positionAssignmentRepeal_Clicked(positionAssignmentRepealEditUI: PositionAssignmentRepealEditUI) {
    positionAssignmentRepealEditUI.PositionAssignment = this.currentInstance;
    positionAssignmentRepealEditUI.ShowDialog(new PositionAssignmentRepeal());
  }
                    
  public positionAssignmentRepealEditUI_Closed(positionAssignmentRepeal: PositionAssignmentRepeal) {
    if (!positionAssignmentRepeal)
      return;
    this.onRefresh();
  }
  
  //#endregion PositionAssignmentRepeal


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(positionAssignmentEditUI: PositionAssignmentEditUI){
    positionAssignmentEditUI.ShowDialog(new PositionAssignment());
  }

  resetFilter() {
    this.filterInstance = PositionAssignment.SeekInstance();
    
    
  }

  public onEditModalClosed(positionAssignment: PositionAssignment) {
    this.onRefresh();
    this.currentInstance = new PositionAssignment();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}