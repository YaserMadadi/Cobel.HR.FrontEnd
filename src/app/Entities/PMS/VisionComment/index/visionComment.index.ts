import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { VisionComment } from '../visionComment';
import { VisionCommentService } from '../visionComment.service';
import { VisionCommentMasterUI } from '../master/visionComment.master';
import { VisionCommentEditUI } from '../edit/visionComment.edit';
import { VisionCommentDeleteUI } from '../delete/visionComment.delete';

import { Vision } from '../../Vision/vision';
import { VisionEditUI } from '../../Vision/edit/vision.edit';
import { Employee } from '../../../HR/Employee/employee';
import { EmployeeEditUI } from '../../../HR/Employee/edit/employee.edit';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'pms-visionComment-index',
  templateUrl: './visionComment.index.html',
  styleUrls: ['./visionComment.index.css']
})
export class VisionCommentIndexUI extends IndexView<VisionComment> implements AfterViewInit, IIndexView<VisionComment> {

  constructor(private visionCommentService: VisionCommentService) {
    super(visionCommentService);
    this.filterInstance = VisionComment.SeekInstance();
    this.currentInstance = new VisionComment();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(visionCommentEditUI: VisionCommentEditUI){
    visionCommentEditUI.ShowDialog(new VisionComment());
  }

  resetFilter() {
    this.filterInstance = VisionComment.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(visionComment: VisionComment) {
    this.onRefresh();
    this.currentInstance = new VisionComment();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}