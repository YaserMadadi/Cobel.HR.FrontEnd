import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { UniversityTerminate } from '../universityTerminate';
import { UniversityTerminateService } from '../universityTerminate.service';
import { UniversityTerminateMasterUI } from '../master/universityTerminate.master';
import { UniversityTerminateEditUI } from '../edit/universityTerminate.edit';
import { UniversityTerminateDeleteUI } from '../delete/universityTerminate.delete';

import { UniversityHistory } from '../../UniversityHistory/universityHistory';
import { UniversityHistoryEditUI } from '../../UniversityHistory/edit/universityHistory.edit';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'hr-universityTerminate-index',
  templateUrl: './universityTerminate.index.html',
  styleUrls: ['./universityTerminate.index.css']
})
export class UniversityTerminateIndexUI extends IndexView<UniversityTerminate> implements AfterViewInit, IIndexView<UniversityTerminate> {

  constructor(private universityTerminateService: UniversityTerminateService) {
    super(universityTerminateService);
    this.filterInstance = UniversityTerminate.SeekInstance();
    this.currentInstance = new UniversityTerminate();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(universityTerminateEditUI: UniversityTerminateEditUI){
    universityTerminateEditUI.ShowDialog(new UniversityTerminate());
  }

  resetFilter() {
    this.filterInstance = UniversityTerminate.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(universityTerminate: UniversityTerminate) {
    this.onRefresh();
    this.currentInstance = new UniversityTerminate();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}