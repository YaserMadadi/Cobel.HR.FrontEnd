import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { AuthService } from '../../../../../xcore/security/auth_service';
import { IndexView } from '../../../../../xcore/tools/ui/view-base/index.view';
import { IIndexView } from '../../../../../xcore/tools/ui/view-base/index.view.interface';
import { MessageController } from '../../../../../xcore/tools/controller.message';
import { PermissionType, PermissionResult, MessageType } from '../../../../../xcore/tools/Enum';


import { SchoolLevel } from '../schoolLevel';
import { SchoolLevelService } from '../schoolLevel.service';
import { SchoolLevelMasterUI } from '../master/schoolLevel.master';
import { SchoolLevelEditUI } from '../edit/schoolLevel.edit';
import { SchoolLevelDeleteUI } from '../delete/schoolLevel.delete';

import { PaginatorComponent } from '../../../../../xcore/tools/ui/components/paginator/paginator.component';
import { SchoolHistoryEditUI } from '../../../HR/SchoolHistory/edit/schoolHistory.edit';
import { SchoolHistory } from '../../../HR/SchoolHistory/schoolHistory';



@Component({
  selector: 'base-schoolLevel-index',
  templateUrl: './schoolLevel.index.html',
  styleUrls: ['./schoolLevel.index.css']
})
export class SchoolLevelIndexUI extends IndexView<SchoolLevel> implements AfterViewInit, IIndexView<SchoolLevel> {

  constructor(private schoolLevelService: SchoolLevelService) {
    super(schoolLevelService);
    this.filterInstance = SchoolLevel.SeekInstance();
    this.currentInstance = new SchoolLevel();
  }

  ngAfterViewInit() {
    this.onRefresh();
  }

  
  
  //#region SchoolHistory

  public schoolHistory_Clicked(schoolHistoryEditUI: SchoolHistoryEditUI) {
    schoolHistoryEditUI.SchoolLevel = this.currentInstance;
    schoolHistoryEditUI.ShowDialog(new SchoolHistory());
  }
                    
  public schoolHistoryEditUI_Closed(schoolHistory: SchoolHistory) {
    if (!schoolHistory)
      return;
    this.onRefresh();
  }
  
  //#endregion SchoolHistory


  
  @ViewChild('Paginator')
  PaginatorComponent: PaginatorComponent; 

  PageChanging(pageNumber: number) {
    this.onSeek(pageNumber);
  }

  public onAdd(schoolLevelEditUI: SchoolLevelEditUI){
    schoolLevelEditUI.ShowDialog(new SchoolLevel());
  }

  resetFilter() {
    this.filterInstance = SchoolLevel.SeekInstance();
    
    
  }

  public onEditModalClosed(schoolLevel: SchoolLevel) {
    this.onRefresh();
    this.currentInstance = new SchoolLevel();
  }

  public onDeleteModalClosed(resultValue: boolean) {
    if (!resultValue)
      return;
    this.onRefresh();
  }
}