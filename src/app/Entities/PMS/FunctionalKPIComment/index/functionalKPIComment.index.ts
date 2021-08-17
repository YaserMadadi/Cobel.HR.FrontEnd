import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { FunctionalKPIComment } from '../functionalKPIComment';
import { FunctionalKPICommentService } from '../functionalKPIComment.service';
import { FunctionalKPICommentMasterUI } from '../master/functionalKPIComment.master';
import { FunctionalKPICommentEditUI } from '../edit/functionalKPIComment.edit';
import { FunctionalKPICommentDeleteUI } from '../delete/functionalKPIComment.delete';

import { FunctionalKPI } from '../../FunctionalKPI/functionalKPI';
import { FunctionalKPIEditUI } from '../../FunctionalKPI/edit/functionalKPI.edit';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'pms-functionalKPIComment-index',
  templateUrl: './functionalKPIComment.index.html',
  styleUrls: ['./functionalKPIComment.index.css']
})
export class FunctionalKPICommentIndexUI extends IndexView<FunctionalKPIComment> implements AfterViewInit, IIndexView<FunctionalKPIComment> {

  constructor(private functionalKPICommentService: FunctionalKPICommentService) {
    super(functionalKPICommentService);
    this.filterInstance = FunctionalKPIComment.SeekInstance();
    this.currentInstance = new FunctionalKPIComment();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(functionalKPICommentEditUI: FunctionalKPICommentEditUI){
    functionalKPICommentEditUI.ShowDialog(new FunctionalKPIComment());
  }

  resetFilter() {
    this.filterInstance = FunctionalKPIComment.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(functionalKPIComment: FunctionalKPIComment) {
    this.onRefresh();
    this.currentInstance = new FunctionalKPIComment();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}