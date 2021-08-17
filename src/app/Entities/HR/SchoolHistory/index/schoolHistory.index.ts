import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { SchoolHistory } from '../schoolHistory';
import { SchoolHistoryService } from '../schoolHistory.service';
import { SchoolHistoryMasterUI } from '../master/schoolHistory.master';
import { SchoolHistoryEditUI } from '../edit/schoolHistory.edit';
import { SchoolHistoryDeleteUI } from '../delete/schoolHistory.delete';

import { Person } from '../../Person/person';
import { PersonEditUI } from '../../Person/edit/person.edit';
import { SchoolLevel } from '../../../Base/SchoolLevel/schoolLevel';


import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';



@Component({
  selector: 'hr-schoolHistory-index',
  templateUrl: './schoolHistory.index.html',
  styleUrls: ['./schoolHistory.index.css']
})
export class SchoolHistoryIndexUI extends IndexView<SchoolHistory> implements AfterViewInit, IIndexView<SchoolHistory> {

  constructor(private schoolHistoryService: SchoolHistoryService) {
    super(schoolHistoryService);
    this.filterInstance = SchoolHistory.SeekInstance();
    this.currentInstance = new SchoolHistory();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  

  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(schoolHistoryEditUI: SchoolHistoryEditUI){
    schoolHistoryEditUI.ShowDialog(new SchoolHistory());
  }

  resetFilter() {
    this.filterInstance = SchoolHistory.SeekInstance();
    super.resetFilter();
  }

  public onEditModalClosed(schoolHistory: SchoolHistory) {
    this.onRefresh();
    this.currentInstance = new SchoolHistory();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}