import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { FunctionalObjectiveComment } from '../functionalObjectiveComment';
import { FunctionalObjectiveCommentService } from '../functionalObjectiveComment.service';
import { FunctionalObjectiveCommentMasterUI } from '../master/functionalObjectiveComment.master';
import { FunctionalObjectiveCommentEditUI } from '../edit/functionalObjectiveComment.edit';
import { FunctionalObjectiveCommentDeleteUI } from '../delete/functionalObjectiveComment.delete';

import { FunctionalObjective } from '../../FunctionalObjective/functionalObjective';
import { FunctionalObjectiveEditUI } from '../../FunctionalObjective/edit/functionalObjective.edit';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'pms-functionalObjectiveComment-index',
  templateUrl: './functionalObjectiveComment.index.html',
  styleUrls: ['./functionalObjectiveComment.index.css']
})
export class FunctionalObjectiveCommentIndexUI extends IndexView<FunctionalObjectiveComment> implements AfterViewInit, IIndexView<FunctionalObjectiveComment> {

  constructor(private functionalObjectiveCommentService: FunctionalObjectiveCommentService) {
    super(functionalObjectiveCommentService);
    this.filterInstance = FunctionalObjectiveComment.SeekInstance();
    this.currentInstance = new FunctionalObjectiveComment();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(functionalObjectiveCommentEditUI: FunctionalObjectiveCommentEditUI){
    functionalObjectiveCommentEditUI.ShowDialog(new FunctionalObjectiveComment());
  }

  resetFilter() {
    this.filterInstance = FunctionalObjectiveComment.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(functionalObjectiveComment: FunctionalObjectiveComment) {
    this.onRefresh();
    this.currentInstance = new FunctionalObjectiveComment();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}