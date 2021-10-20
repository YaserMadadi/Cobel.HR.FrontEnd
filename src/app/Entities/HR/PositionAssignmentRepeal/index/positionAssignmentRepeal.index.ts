import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { PositionAssignmentRepeal } from '../positionAssignmentRepeal';
import { PositionAssignmentRepealService } from '../positionAssignmentRepeal.service';
import { PositionAssignmentRepealMasterUI } from '../master/positionAssignmentRepeal.master';
import { PositionAssignmentRepealEditUI } from '../edit/positionAssignmentRepeal.edit';
import { PositionAssignmentRepealDeleteUI } from '../delete/positionAssignmentRepeal.delete';

import { PositionAssignment } from '../../PositionAssignment/positionAssignment';
import { PositionAssignmentEditUI } from '../../PositionAssignment/edit/positionAssignment.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'hr-positionAssignmentRepeal-index',
  templateUrl: './positionAssignmentRepeal.index.html',
  styleUrls: ['./positionAssignmentRepeal.index.css']
})
export class PositionAssignmentRepealIndexUI extends IndexView<PositionAssignmentRepeal> implements AfterViewInit, IIndexView<PositionAssignmentRepeal> {

  constructor(private positionAssignmentRepealService: PositionAssignmentRepealService) {
    super(positionAssignmentRepealService);
    this.filterInstance = PositionAssignmentRepeal.SeekInstance();
    this.currentInstance = new PositionAssignmentRepeal();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(positionAssignmentRepealEditUI: PositionAssignmentRepealEditUI){
    positionAssignmentRepealEditUI.ShowDialog(new PositionAssignmentRepeal());
  }

  resetFilter() {
    this.filterInstance = PositionAssignmentRepeal.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(positionAssignmentRepeal: PositionAssignmentRepeal) {
    this.onRefresh();
    this.currentInstance = new PositionAssignmentRepeal();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}